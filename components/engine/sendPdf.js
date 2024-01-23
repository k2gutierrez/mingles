"use server"

import { sendMail, compileEmail } from "./mail";
import { emailTemplate } from "../templates/email";

export async function send (email) {

    await sendMail({
        to: email,
        name: "Mingles Manifesto",
        subject: "Come Mingle so we can fight to get our lands back",
        body: emailTemplate
    })

    
  }