function sendMail() {    
    var body = document.getElementById("cmessage").value;
    var subject = document.getElementById("cname").value;

    window.location.replace(`mailto:hello@domain.com?body=${body}&subject=${subject} wants to contact you`);    
}