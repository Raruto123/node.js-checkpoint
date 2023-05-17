var generator = require("generate-password");
var password = generator.generate({
    length : 10,
    numbers : true,
    uppercase : true,
    lowercase : true,
})

console.log(password);

if (password.toString().includes("a")) {
    console.log("je suis fort")
};