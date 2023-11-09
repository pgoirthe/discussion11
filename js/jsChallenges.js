function challenge1(element){
    console.log("checked_attribute" + element.checked);
    if (element.checked == true);
        document.querySelector("#emailDiv").style.display = "block";
    if (element.checked == fasle);
        document.querySelector("#emailDiv").style.display = "none";
}

function challenge2(){
    document.querySelector("#home").value = document.querySelector("bill").value
    document.querySelector("#home").setAttribute("disabled", "")
}
document.querySelector("#sameAddress").addEventListener("click",challenge2);


document.querySelector("h1").addEventListener("mouseenter", changeBackground);