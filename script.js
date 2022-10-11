console.log("hello");
function getcolor(){

    const randomnumber = Math.floor(Math.random()*16777215);
    console.log(randomnumber);
    const code = "#" + randomnumber.toString(16);
    document.querySelector("#colorcode").innerText = code;
    document.querySelector('body').style.backgroundColor = code;
}
getcolor();
