const express = require("express"),
  app = express(),
  nodeMailer = require("nodemailer"),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 5000;

const http = require("http");
setInterval(() => {
  http.get("http://josefelipeq.com/");
}, 300000);

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", (req, res, next) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    to: "josefelipeq@live.com",
    subject: req.body.subject,
    html: `<p>
    <b>NOMBRE: </b>${req.body.name}
    <br/>
    <b>EMAIL: </b>${req.body.email}
    <br/>
    <b>MENSAJE: </b> <br/> ${req.body.message.replace(/\n/g, "<br />")}
    </p>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.send("OK");
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
});

app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);
