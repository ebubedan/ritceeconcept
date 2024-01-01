document.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Function to close the menu when a link is clicked
function closeMenu() {
    document.getElementById('menuToggle').checked = false;
  }
  
