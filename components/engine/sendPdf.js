"use server"

import { sendMail, compileEmail } from "./mail";

export async function send (email) {

    await sendMail({
        to: email,
        name: "Mingles Manifesto",
        subject: "Come Mingle so we can fight to get our lands back",
        body: compileEmail()
    })

    
  }