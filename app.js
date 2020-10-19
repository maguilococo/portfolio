//HomePage

//Proyectos
/*function visitUrl (url) {
    window.open(url, '_blank');
}*/

//Contact
let mailContact = document.getElementById("mail-contact");
let linkedinContact = document.getElementById("linkedin-contact");
let gitContact = document.getElementById("git-contact");

mailContact.onclick = () => {
    setTimeout(() => {
        mailContact.src = "images/mail_footer.svg";
    }, 2000);
}

linkedinContact.onclick = () => {
    setTimeout(() => {
        linkedinContact.src = "images/linkedin-click.svg";
    }, 2000);
}

gitContact.onclick = () => {
    setTimeout(() => {
        gitContact.src = "images/github-click.svg";
    }, 2000);
}

