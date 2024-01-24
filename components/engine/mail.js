import nodemailer from "nodemailer"
//import * as handlebars from "handlebars"
import { emailTemplate } from "../templates/email"

export async function sendMail ( {to, subject, body} ) { //name removed from function scope
    const smtp_email = process.env.SMTP_EMAIL
    const smtp_password = process.env.SMTP_PASSWORD
    
    const transport = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        auth:{
            user: smtp_email,
            pass: smtp_password
        },
        secure: true,
        tls: {
            rejectUnauthorized: false
        }
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
                console.log(response)
                resolve(response)
            }
        }
        
        )
        
    })
    
         

} 

{/* funcion ara agregar variables después export function compileEmail() {
    const template = handlebars.compile(emailTemplate)
    const htmlBody = template()
    return htmlBody
}*/}
