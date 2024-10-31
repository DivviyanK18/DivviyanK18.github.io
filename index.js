// Allow the user to enter their name
document.getElementById('nameButton').addEventListener('click', function() {
    const name = prompt("Enter your name:");
    // show a greeting to the user once name is typed in
    document.getElementById('nameDisplay').textContent = 'Hello ' + name + '!!';
});
// check dimensions of image, reduce and expand when clicked on to the set width and height
document.getElementById('profileImage').addEventListener('click', function() {
    if (this.style.width === '400px') {
        this.style.width = '200px';
        this.style.height = 'auto';
    } else {
        this.style.width = '400px';
        this.style.height = 'auto';
    }
});
// check and loop through each navigation link
const navLinks = document.querySelectorAll('nav a');
// when links are hovered over, expand size and change colour as necessary
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'blue';
        this.style.fontSize = '20px';
    });

    link.addEventListener('mouseout', function() {
        this.style.color = 'black';
        this.style.fontSize = '18px';
    });
}); 
