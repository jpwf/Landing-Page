// Pesquisar como fazer o envio de email com os dados oferecidos pelo usuário(como se vc tivesse pegando o lead da pessoa)
let nome = document.getElementById("name")
let email = document.getElementById("email")
let subscribeB = document.getElementById("subscribe")
const Q1_button = document.getElementById("Q1")
const Q2_button = document.getElementById("Q2")

const hide1 = document.getElementById("hide-1")
const hide2 = document.getElementById("hide-2")

const btn_close1 = document.getElementById("close1")
const btn_close2 = document.getElementById("close2")

let instagramB = document.getElementById("instagram")

Q1_button.addEventListener("click", () =>{
    hide1.classList.remove("first-question")
    hide2.classList.add("second-question")
    btn_close1.addEventListener("click", ()=>{
        hide1.classList.add("first-question")
    })
})
Q2_button.addEventListener("click", ()=>{
    hide2.classList.remove("second-question")
    hide1.classList.add("first-question")
    btn_close2.addEventListener("click", ()=>{
        hide2.classList.add("second-question")
    })
})

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

