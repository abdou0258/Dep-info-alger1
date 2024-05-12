let mails = document.querySelectorAll('table tr td:nth-of-type(5):not(table tr:first-of-type td:nth-of-type(5))');
let send = document.createElement('a');

mails.forEach(mail => {
    mail.onclick = address => {
        send.setAttribute('href', `mailto:${address.target.innerHTML}`);
        send.click();
    } 
});
