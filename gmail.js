const nm = require("nodemailer");
const { google } = require("googleapis");

const ID = "1095787913597-e6k9g8nup9si81jtqaretq4k42aqmsip.apps.googleusercontent.com";//Client ID
const CS = "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";//Client Secret
const RU = "https://developers.google.com/oauthplayground";//Redirect URI
const RT = "1//04BWGaMgblwEnCgYIARAAGAQSNwF-L9Irp5tumk283rV_dFk_w6d7NYELZInGQ7Yje1M3dEeXX2JpsDzSlEjLqlYXhoBjt5cIFuw";//Refresh token

const oAuth2Client = new google.auth.OAuth2(ID, CS, RU);
oAuth2Client.setCredentials({ refresh_token: RT});

async function send(mailOpt) {
	try{
		const accessToken = await oAuth2Client.getAccessToken();

		const transport = nm.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: "manalearn530@gmail.com",
				clientId: ID,
				clientSecret: CS,
				refreshToken: RT,
				accessToken: accessToken
			}
		})

		mailOpt = mailOpt ? mailOpt : {
			from: "ManaLearn <manalearn530@gmail.com>",
			to: "nhtienlam@gmail.com",
			subject: "Test",
			text: "Text2",
			html: "<h1>Test3</h1>"
		}

		const result = await transport.sendMail(mailOpt);
		return result
	}catch (e){
		return e;
	}
}

export default send;