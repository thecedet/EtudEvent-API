const fs = require("fs")

module.exports = (to,subject,text) => {
    require('gmail-send')({
        user: process.env.MAIL_USER ,
        pass: process.env.MAIL_PASSWORD,
        from: "Etud\'event",
        to,
        subject
    
    })({
        text
    }, (error, result, fullResult) => {
        if (error) console.error(error);
        console.log(result);
    })

}