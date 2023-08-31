function passwordsIdentical() {
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value
    if (password == confirmPassword) {
        const passwordInput = document.getElementById("password")
        passwordInput.setAttribute("style", "border-color: green; border-width: 3px")
        const confirmPasswordInput = document.getElementById("confirm-password")
        confirmPasswordInput.setAttribute("style", "border-color: green; border-width: 3px")
    } else {
        const passwordInput = document.getElementById("password")
        passwordInput.setAttribute("style", "border-color: red; border-width: 3px")
        const confirmPasswordInput = document.getElementById("confirm-password")
        confirmPasswordInput.setAttribute("style", "border-color: red; border-width: 3px")
    }    
}