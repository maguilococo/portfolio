//HomePage

//Proyectos
function visitUrl (url) {
    window.open(url, '_blank');
}


//PORTFOLIO "https://github.com/maguilococo/portfolio" "http://htmlpreview.github.io/?https://github.com/maguilococo/portfolio/blob/master/index.html"
//PAPER "https://github.com/maguilococo/workshopJS" "https://htmlpreview.github.io/?https://github.com/maguilococo/workshopJS/blob/master/index.html"
//PIANO "https://github.com/maguilococo/piano"   
//CS50 "https://github.com/me50/maguilococo"

//Contact
let mailContact = document.getElementById("mail-contact");
let linkedinContact = document.getElementById("linkedin-contact");
let gitContact = document.getElementById("git-contact");

mailContact.onclick = () => {
    mailContact.src = "images/mail_footer.svg";
}

linkedinContact.onclick = () => {
    linkedinContact.src = "images/linkedin-click.svg";
}

gitContact.onclick = () => {
    gitContact.src = "images/github-click.svg";
}
