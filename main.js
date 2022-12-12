
let username1 = document.getElementById("username");
let password1 = document.getElementById("password");
let sumbitbtn = document.getElementById("sumbit");
let messagebt = document.getElementById("message-ref");

let isusernamevaild = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(username1.value);
};

let ispassowrdvaild = () => {
    const passwordRegex = /^[a-zA-Z][a-zA-Z0-9]{8,32}/gi;
    return passwordRegex.test(password1.value);
};

username1.addEventListener("input", () => {
    if (!isusernamevaild()) {
        messagebt.style.visibility = "hidden";
        username1.style.cssText =
            "border-color:#fe2e2e; background-color:#ffc2c2";
    } else {
        username1.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
    }
});

password1.addEventListener("input", () => {
    if (!ispassowrdvaild()) {
        messagebt.style.visibility = "hidden";
        password1.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
        password1.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
    }
});

sumbitbtn.addEventListener("mouseover", () => {
    if (!isusernamevaild() || !ispassowrdvaild()) {
        let containerRect = document
            .querySelector(".container")
            .getBoundingClientRect();
        let sumbitRect = sumbitbtn.getBoundingClientRect();
        let offset = sumbitRect.left - containerRect.left;
        console.log(offset);
        if (offset <= 100) {
            sumbitbtn.style.transform = "translateX(16.25em)";
        }
        else {
            sumbitbtn.style.transform = "translateX(0)";
        }

    }
});

sumbitbtn.addEventListener("click", () => {
    messagebt.style.visibility = "visible";
});