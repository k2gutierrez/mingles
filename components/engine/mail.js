import nodemailer from "nodemailer"
//import * as handlebars from "handlebars"
import { emailTemplate } from "../templates/email"
import SESTransport from "nodemailer/lib/ses-transport"

export async function sendMail ( {to, from, subject, body} ) { //name removed from function scope
    //const smtp_email = process.env.SMTP_EMAIL
    //const smtp_password = process.env.SMTP_PASSWORD


    const transport = nodemailer.createTransport({
        port: 465,
        host: process.env.REGION_AWS,
        secure: true,
        auth: {
            user: process.env.SMTP_USER_AWS,
            pass: process.env.SMTP_PASS_AWS,
        },
        tls: true,
        debug: true,
    })

    const testResult = await new Promise((resolve, reject) => {
        transport.verify(function(error, success){
            if (error){
                console.log(error)
                reject(error)
            } else {
                console.log("Server is ready to take the message")
                resolve(success)
            }
        })
    }) 
    console.log(testResult)

    const sendResult = await new Promise((resolve, reject) => {
        transport.sendMail({
            from: 'minglesnft@gmail.com', 
            to: to, 
            subject: subject, 
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
                console.log(response)
                resolve(response)
            }
        }
        
        )
        
    })
    console.log(sendResult)
    
         

} 

{/* funcion ara agregar variables después export function compileEmail() {
    const template = handlebars.compile(emailTemplate)
    const htmlBody = template()
    return htmlBody
}*/}
