import Forgot from "../../models/Forgot";
import User from "../../models/User";

export default async function handler(req, res) {
    // Check if the user exist in the database
    // Send an email to the user
    // let sendMail = false;
    console.table(req.body)
    console.table(res)
    let token = `tdhrththdrsbdhg`;
    let forgot = new Forgot({
        email: req.body.email,
        token: token
    }) 
    
    if(res.body.sendMail == forgot.sendMail){

        
        
        // let forgot = new Forgot({
        //     email: req.body.email,
        //     token: token
        // })
    
    let email = `We have sent you this email in response to your request to reset your password on DailyCart.com.

    To reset your password, please follow the link below:

    <a href="http://DailyCart.com/forgot?token=${token}">Click here to reset your password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your My Account Page and change your password.

    <br/><br/>`
    res.json(JSON.parse(email))
    res.status(200).json({ success: true })
    console.table(res)
    }

    else{
        res.status(200).json({ success: false, error: "Invalid credentials" })

    }
    
  }