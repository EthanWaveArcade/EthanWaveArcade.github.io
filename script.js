//Footer Year

let year = new Date().getFullYear();

document.getElementById("year").innerHTML = year + " 'til infinity";


//Current URL
const navlinks = document.querySelectorAll('.nav-link');

navlinks.forEach(link => {
    if (link.pathname === window.location.pathname) {
        link.classList.add('activeURL');
        ;
    } else {
        link.classList.remove('activeURL');
    }
});

//Email

let emailIcon = document.getElementById('emailIcon');

emailIcon.addEventListener('click', function () {
    emailIcon.innerHTML = '<i id="emailIcon2" class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:ethan@wavearcade.com">ethan@wavearcade.com</a>';
 
});