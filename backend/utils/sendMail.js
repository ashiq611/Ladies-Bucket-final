const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const REFRESH_TOKEN = `${process.env.REFRESH_TOKEN}`;
const CLIENT_ID = `${process.env.CLIENT_ID}`;
const CLIENT_SECRET = `${process.env.CLIENT_SECRET}`;
const REDIRECT_URL = `${process.env.REDIRECT_URL}`;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (options) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transpoter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        type: "OAuth2",
        user: "soulpark0@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOption = {
      from: process.env.MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
    await transpoter.sendMail(mailOption);
  } catch (err) {
    console.log(err);
  }
};
module.exports = sendMail;

// REFRESH_TOKEN = "1//04Ov2_WlzI-7PCgYIARAAGAQSNwF-L9Irf_QfMzLAi7wpMzFhHg2UuSAQLyclajrxuvbcP3I9q8ZTw88BigNFzTxmDC8R0fMvyU4"


// REDIRECT_URL = "https://developers.google.com/oauthplayground"

// const sendMail = async (options) => {
//   const transpoter = nodemailer.createTransport({
//     service: process.env.SMTP_SERVICE,
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });
//   const mailOption = {
//     from: process.env.SMTP_SERVICE,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   await transpoter.sendMail(mailOption);
// };
// module.exports = sendMail;
