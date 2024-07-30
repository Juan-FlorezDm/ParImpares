const btn = document.getElementById("Enviar")
const respuesta = document.getElementById("Respuesta")

btn.addEventListener('click' , ()=>{
    const entrada = document.getElementById("Entrada").value
    if(entrada >= 0){
        if(entrada % 2 === 0){
            console.log(entrada)
           respuesta.innerHTML = "Es Par"
        }else{
            respuesta.innerHTML = "Es impar"
        }
    }else{
        respuesta.innerHTML = "Ingresa un numero"
    }
    
})