export const fetchRequest = async (username, email, pass, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: username,
                email: email,
                password: pass,
            }),
        });
        const data = await response.json();
            // console.log(data.user.name);
            setter(data.user)
            localStorage.setItem("myToken", data.token)
    } catch (error) {
        console.log(error);
    }
}