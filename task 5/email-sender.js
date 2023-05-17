
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "youremail@gmail.com",
        pass : "your password"
    }
});

var mailOptions = {
    from : "youremail@gmail.com",
    to : "myfriend@yahoo.fr",
    subject : "test avec node.js",
    text : "c'est juste un test mec chill"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("E-mail envoyé :" + info.response);
    }
});