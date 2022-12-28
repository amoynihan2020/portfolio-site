const EMAIL = "amoynihan16@gmail.com"

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodeMailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => ("Server Running"))
console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASS);

const contactEmail = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true, 
    auth: {
        type: "OAuth2",
        user:EMAIL,
        clientId: '677115585887-ia75rs9nbimmbtr042rntn0oscpg0m88.apps.googleusercontent.com',
        clientSecret: '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'

    }
});

contactEmail.verify((error)=>{
    if(error){
        console.log('ERROR',error);
    } else {
        console.log("Ready to send")
    }
});

router.post("/contact", (req, res) =>{
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail ={
        from : name,
        to: EMAIL,
        subject : `${name} Has Contact you Via your Portfolio!`,
        html: `<p> Name: ${name}</p>
               <p> Email: ${email}</p>
               <p> Phone: ${phone}</p>
               <p> Message: ${message} </p>`,
    };

    contactEmail.sendMail(mail, (error) =>{
        if(error) {
            res.json(error)
        } else {
            res.json({code:200, status:"message sent"})
        }
    })


}) 