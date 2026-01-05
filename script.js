
let imgBox = document.querySelector(".imgBox");
let qrImg = document.querySelector("#qrImage");
let inputTxt = document.querySelector("#inputTxt");
let btn = document.querySelector("#btn");
let errorImg = document.querySelector(".errorImg");
let year = document.querySelector("#year").textContent = new Date().getFullYear();

btn.addEventListener("click", () =>{
    if(inputTxt.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputTxt.value;
        imgBox.classList.add("show-img");

    }else{
        errorImg.style.display = "block"
        inputTxt.classList.add("error");
       
        setTimeout(()=>{
            inputTxt.classList.remove("error");
        },1000);
    }
    

    
})


    
