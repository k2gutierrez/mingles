import nodemailer from "nodemailer"
//import * as handlebars from "handlebars"
import { emailTemplate } from "../templates/email"

export async function sendMail ({to, subject, body}) { //name removed from function scope
    const smtp_email = process.env.SMTP_EMAIL
    const smtp_password = process.env.SMTP_PASSWORD
    
    const transport = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth:{
            user: smtp_email,
            pass: smtp_password
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    try {
        const testResult = await transport.verify()
        console.log(testResult)
    } catch (error) {
        console.log(error)
        return
    }

    const sendResult = await new Promise((resolve, reject) => {
        transport.sendMail({
            from: smtp_email, 
            to, 
            subject, 
            html: body,
            attachments: [
                {
                    filename: 'MinglesManifesto.pdf',
                    path: 'components/engine/MinglesManifesto.pdf'
                }
            ]
        }, (err, response) => {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        }
        
        )
        
    })
    console.log(sendResult)
         

} 

{/*export function compileEmail() {
    const template = handlebars.compile(emailTemplate)
    const htmlBody = template()
    return htmlBody
}*/}