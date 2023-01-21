import {setAuthStatus} from "./autorized-status";


export default function loginAction(event) {
    event.preventDefault();


    // get the values of the input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // validate the input
    if (!email || !password) {
        const elError = document.getElementById("error")
        elError.style.visibility = 'visible';
        return;
    }

    // send a request to the server to log in

    fetch("url", {
        method: "POST",
        body: JSON.stringify({email: email, password: password}),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log('Login process start !!!')
            setAuthStatus(true);
            if (!response.ok) {
                throw new Error("Failed to log in");

            }
            return response.json();
        })
        .then(data => {
            console.log("Logged in successfully", data);
        })
        .catch(error => {
            console.error(error);
            alert("Failed to log in: " + error.message);
        });
}


