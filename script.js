const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

console.log(buttons);
buttons.forEach((item)=> {
    item.onclick = ()  => {
        if (item.id == "clear")
            display.innerText = "";
        else if (item.id == "backspace")
        {
            let str = display.innerText.toString();
            display.innerText = str.substr(0, str.length - 1);
        }
        else if (display.innerText != "" && item.id == "equal")
            display.innerText = eval(display.innerText);
        else if (display.innerText == "" && item.id == "equal")
            display.innerText = "";
        else if (item.id == "equal")
            alert("hdgdgd");
        else
            display.innerText += item.id;
        console.log(item.id);
    };
});