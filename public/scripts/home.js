// Pesquisar como fazer o envio de email com os dados oferecidos pelo usuário(como se vc tivesse pegando o lead da pessoa)
let nome = document.getElementById("name")
let email = document.getElementById("email")
let subscribeB = document.getElementById("subscribe")

let instagramB = document.getElementById("instagram")
subscribeB.addEventListener("click", () =>{
    if(nome.value !== "" && email.value !== ""){
        // sendmail() 
        alert("Cadastro realizado com sucesso")
         window.open("https://t.me/+V07A1Hwn_k03YzFh")
     }
     else{
        alert("Preencha os campos")
         
     }
 })

instagramB.addEventListener("click", () =>{
    window.open("https://www.instagram.com/_jpwf_/")
})

