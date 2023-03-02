const Insta = require("instamojo-nodejs");
// const connection = require("../config/database");


const API_KEY = process.env.API_KEY;
const AUTH_KEY = process.env.AUTH_KEY;

Insta.setKeys(API_KEY, AUTH_KEY);
Insta.isSandboxMode(true);

exports.pay = (req, res) => {
    var name = req.body.data_name;
    var email = req.body.data_email;
    var amount = req.body.data_amount;
    var data = new Insta.PaymentData();
    const redirectUrl = "http://localhost:5000/success";
    data.setRedirectUrl(redirectUrl);
    data.send_email = "False";
    data.purpose = "React.js video courses";
    data.amount = amount;
    data.name = name;
    data.email = email;

    Insta.createPayment(data, function (error, response) {
        const result=JSON.parse(response);
        if(result.success){
            res.redirect(result.payment_request.longurl);
        }else{
            res.status(500).json({ message: "Payment Failed" });
        }
    });
};

// exports.saveTransaction = (req, res) => {
//     const { name, email, amount, paymentId, paymentRequestId, status } = req.body;

//     const query = `INSERT INTO transactions (name, email, amount, paymentId, paymentRequestId, status) VALUES ('${name}', '${email}', '${amount}', '${paymentId}', '${paymentRequestId}', '${status}')`;
//     connection.query(query, (err, result, fields) => {
//         if(err){
//             console.log(err);
//         }else{
//             res.status(200).json({ message: "Transaction saved successfully" });
//         }
//     });
// };