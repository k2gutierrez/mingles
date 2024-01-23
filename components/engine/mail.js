import nodemailer from "nodemailer"
//import * as handlebars from "handlebars"
import { emailTemplate } from "../templates/email"

export async function sendMail ({to, name, subject, body}) {
    const {SMTP_PASSWORD, SMTP_EMAIL} = process.env
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
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
            from: SMTP_EMAIL, 
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