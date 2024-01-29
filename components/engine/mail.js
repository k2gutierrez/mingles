import nodemailer from "nodemailer"
//import * as handlebars from "handlebars"


export async function sendMail ( {to, subject, body} ) { //name removed from function scope


    const transport = nodemailer.createTransport({

        service: "Gmail",
        secure: false,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },

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
            from: process.env.SMTP_EMAIL, 
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
