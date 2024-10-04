Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pavansv87@gmail.com",
    Password : "4E9B7D6E0DBCA20212ABCDD73D1FB7177143",
    To : 'pavans001@gmail.com',
    From : "pavansv87@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);