'use client'
import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import twitter from '../public/assets/Logo/twitter.svg'
import telegram from '../public/assets/Logo/telegram.png'
import cls from 'classnames'
import localFont from 'next/font/local'
import Link from 'next/link';
import logo from '../public/assets/Logo/Mingles_Logo_Color_Mesa_de_trabajo_1.png'

const fontQuirky = localFont({ 
  src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
  src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Footer() {
  return (

    <div className={cls(styles.cont, 'align-items-center justify-content-center p-3')}>
      <div className='row align-items-center text-center justify-content-center'>
        <div className='col-9'>
          <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3'>

              <Link href={'/'}><Image src={logo} className='img-fluid' alt='Mingles' width={240} height={66.853} ></Image></Link>

              <button type="button" className={cls(styles.buttons, fontAgrandir.className, "btn btn-sm btn-outline-dark")}>Download Manifesto</button>


              <button type="button" className={cls(styles.buttons, fontAgrandir.className, "btn btn-sm btn-outline-dark me-sm-auto")}>Join Mingles</button>
              <div className='row'>
              <div className='col-6'>
                <Link href="https://twitter.com/MinglesNFT"> <Image className='img-fluid' src={twitter} alt='mingle-twitter' width={61.281} height={61.281} ></Image> </Link>
              
              </div>
              <div className='col-6'>
                <Link href="#"> <Image className='img-fluid' src={telegram} alt='mingle-telegram' width={61.281} height={61.281} ></Image> </Link>
              </div>
              </div>
              

              <div className=''>
                
              </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer