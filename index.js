document.getElementById('nameButton').addEventListener('click', function() {
    const name = prompt("Enter your name:");
    document.getElementById('nameDisplay').textContent = 'Hello ' + name + '!!';
});

document.getElementById('profileImage').addEventListener('click', function() {
    if (this.style.width === '400px') {
        this.style.width = '200px';
        this.style.height = 'auto';
    } else {
        this.style.width = '400px';
        this.style.height = 'auto';
    }
});

const navLinks = document.querySelectorAll('nav a');

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
