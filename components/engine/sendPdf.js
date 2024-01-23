"use server"

import { sendMail } from "./mail";
import { emailTemplate } from "../templates/email";

export async function send (to) {

    await sendMail({
        to: to,
        name: "Mingles Manifesto",
        subject: "Come Mingle so we can fight to get our lands back",
        body: emailTemplate
    })

    
  }