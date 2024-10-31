function saveForms() {
// setting values up for each input field 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const feedback = document.getElementById("feedback").value;
    const favColor = document.getElementById("favColor").value;
    const subscribe = document.getElementById("subscribe").checked;
// storing each value into the local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("feedback", feedback);
    localStorage.setItem("favColor", favColor);
    localStorage.setItem("subscribe", subscribe ? "Yes" : "No");
// display an alert showing the data has been saved to the local storage
    alert("Form data saved to local storage!");
}
