import React from 'react'
import styles from './page.module.css'
import cls from 'classnames'
import localFont from 'next/font/local'

const fontQuirky = localFont({ 
  src: '../../../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
  src: '../../../public/fonts/agrandir/Agrandir-Regular.otf'
})

function TermsAndCOnditions() {
  return (
    <div className={cls(fontAgrandir.className, styles.content, styles.p, 'container-fluid row p-5 my-5')}>
      <div className={cls('text-center row align-items-center justify-content-center mt-4')}>
        <div className={cls(styles.caja, 'text-start')}>
          <p className={cls(styles.title, 'text-center')}>Privacy Policy</p>
          <p className={cls(styles.text)}>
            Privacy Policy: By accessing and using the Mingles website, users agree that their personal information, 
            specifically email addresses collected when expressing interest in receiving our manifesto or updates, 
            will be used solely for the purpose of providing said information related to the Mingles project. Mingles 
            S.A.P.I. respects user privacy and is committed to protecting it; hence, no personal data will be shared 
            with third-party entities except as required by law. The data collected is stored securely and is only used 
            to send communications about the project. Users have the right to unsubscribe and withdraw their consent at any time, 
            and any changes to this policy will be communicated through the website. We encourage users to review this policy 
            regularly to stay informed of how we are protecting their information.
          </p>
          <p className={cls(styles.title, 'text-center mt-5')}>Disclaimer</p>
          <p className={cls(styles.text)}>
            The content provided on the Mingles website is for informational purposes only and does not constitute financial 
            advice. Mingles NFTs are utility tokens intended for access to the Mingles ecosystem, offering community participation 
            and tangible benefits such as a comic book and a Tequila decanter, but are not securities, investments, or 
            indicative of ownership in Mingles NFTs SAPI or Mingles NFTs LLC. They are not meant for financial gain and, according 
            to the Howey Test used by the SEC, do not constitute an investment contract as they do not involve an investment of 
            money in a common enterprise with an expectation of profits predominantly from the efforts of others. Mingles is not a 
            registered financial entity and does not purport to provide financial services. The value of Mingles NFTs can fluctuate, 
            carrying inherent risks akin to other digital assets. By purchasing or interacting with Mingles NFTs, individuals acknowledge 
            these risks and the non-financial nature of their purchase. We encourage all potential buyers or participants to conduct 
            thorough research and seek independent advice as needed. Agreement to the terms and conditions is required for any engagement 
            with Mingles NFTs, which are available on our website, along with complete details. We welcome and encourage participation in 
            our Telegram group and community events for further information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsAndCOnditions