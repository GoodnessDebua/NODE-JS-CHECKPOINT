const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
