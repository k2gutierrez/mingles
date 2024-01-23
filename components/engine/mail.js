import nodemailer from "nodemailer"
//import * as handlebars from "handlebars"
import { emailTemplate } from "../templates/email"

export async function sendMail ({to, name, subject, body}) {
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

    try {
        const sendResult = await transport.sendMail({
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
        })
        console.log(sendResult)
    } catch (error) {
        console.log(error)
        return
    }
} 

{/*export function compileEmail() {
    const template = handlebars.compile(emailTemplate)
    const htmlBody = template()
    return htmlBody
}*/}