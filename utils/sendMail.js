const fs = require("fs")

module.exports = (to,subject,text) => {
    require('gmail-send')({
        user: process.env.MAIL_USER ,
        pass: process.env.MAIL_PASSWORD,
        from: "Etud\'event",
        to:"clement@dorlet.org",
        subject
    
    })({
        html: mail(text)
    }, (error, result, fullResult) => {
        if (error) console.error(error);
        console.log(result);
    })

}


const mail = text => `
	<div style="background-color: #8B008B; padding: 10px; width: 80%; border-radius: 10px; margin-right: auto; margin-left: auto; padding: 2em;">
	<table style="font-family: Arial; background-color: #FFFFFF; text-align: center; margin-right: auto; margin-left: auto; padding-top: 2em; border-radius: 10px">
		<tr>
			<td style="text-transform: uppercase; font-size: 1.5em; padding-bottom: 4px;"> Merci de votre inscription &agrave; Etud'Event&nbsp;!
			</td>
		</tr>
		<tr>
			<td style="font-size: 1.3em;"> Pour v&eacute;rifier votre compte, veuillez cliquer sur le lien de v&eacute;rification suivant&nbsp;: <a href="${text}">lien de v&eacute;rification</a>
			</td>
		</tr>
		<tr>	
			<td style="padding: 2em;"><img src="LOGO" alt="|| Logo Etud'Event à mettre ||"/> Toute l'&eacute;quipe Etud'Event vous  souhaite une bonne journ&eacute;e&nbsp;! Profitez bien de notre application&nbsp;!
			</td>
		</tr>
	</table>
	</div>`