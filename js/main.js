let guardar = document.getElementById("btn-Guardar");//boton
let campoData = document.getElementById("data");//campo
let ver = document.getElementById("btn-Ver");
let borrar = document.getElementById("btn-Borrar")
let f = document.getElementsByTagName("form")[0];
const key = "info";
let cont = 1;
let participantes = [];


guardar.addEventListener("click", function(event){
    event.preventDefault();

    console.log(participantes.length);

    let nombre ={"id" : cont, "firstName" : campoData.value};  //asignar nombre, se asignar el valor que se introduzca al campo en el valor del elemento firsName
    console.log("nombre.firstName", nombre.firstName);  //muestra em consola el texto "nombre.firstName" y su valor y se guarda en local storage
    console.log("id: " , nombre.id)
    cont++;
    participantes.push(nombre); //se agrega al arreglo vacio participantes
    console.log(participantes);
    
    
    localStorage.setItem(key, JSON.stringify(participantes));   // setItem, envia informacion a session storage, variable y el valor que se agreega informacion
                                                        //los datos de storage son todos de tipo cadena, string por lo que deben convertirse a tipo numerico si lo requiere
                                                        //los datos storage secion son temporales y lo locales storage son permanenetes
                                                        //sessionStorage.setItem se encuentra en consola en aplication
                                                        //"info", es el nombre de l avariable con el qeu encontramos la informacion, el key


        //objeto
});

ver.addEventListener("click", function(event){
    event.preventDefault();
    
    let alert1 = document.getElementsByClassName("alert-warning")[0];  //getElementsById puede tener todas las clases y getElementById solo puede tenre una
                                                                //nos regresa una lista de elementos, en este caso como solo hay un alert solo traera uno

    //if(sessionStorage.getItem("info") != null){
        //localStorage, los datos se almacenan hasta que se borren cokies
        if(localStorage.getItem(key)){          //si tiene algo guardado se muestra alert, es diferente a null, porque null no muestra aler si no existe "info" pero si esta vacia si la muestra
           // alert1.innerText = sessionStorage.getItem("info");  //mandar a traer en pantalla el dato ues e guardo en seccion storage
           let tmp= JSON.parse(localStorage.getItem(key));
           alert1.innerText ="";
           tmp.forEach(element => {
                alert1.innerHTML += `${element.id}.- ${element.firstName} <br/>`;
           });
           
            alert1.style.display = "block"; //para mostrarlo, se crea un display
            setTimeout( ()=>{alert1.style.display = "none"} , (10*1000) );   //timer para que sean 3 segundo si se quiere por minutos se multiplica por 10000
                                                                    //timer para que se apague despues de 3s
    }
    console.log(sessionStorage.getItem("info"));        //para saber en la consola que valor arrojo si no tiene nada "info" almacenado, esto sive para 
                                                                                            //hacer condiciones 
});

borrar.addEventListener("click", function(event){   //evento para remover la variable 
    event.preventDefault();
    sessionStorage.removeItem("info");
});