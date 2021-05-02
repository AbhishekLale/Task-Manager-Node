const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email,name)=> {
    sgMail.send({
        to: email, 
        from: 'abhisheklale181@gmail.com',
        subject: 'Thanks For joining in!',
        text: `Welcome to the app, ${name} Let me Know how you get along with app :)`
    })
}

const sendCancelationEmail = (email,name)=> {
    sgMail.send({
        to: email, 
        from: 'abhisheklale181@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye!, ${name} Let us Know what you need from us!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}