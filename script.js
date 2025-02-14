function openForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;

    if (name && email && phone && country) {
        document.getElementById("responseMessage").innerHTML = `
        <img src="icons and iamges/check.gif" class="check-gif">
        <div class="responseMessage">Your application has been submitted!</div>`;
    } else {
        document.getElementById("responseMessage").innerHTML = `Please fill all the details.`;
    }
});