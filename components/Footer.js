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

    <div className='container-sm p-3'>
      <div className='row d-flex align-items-center'>
        <div className='col-9'>
          <div className=' gap-3 d-flex flex-column flex-sm-row justify-content-center align-items-center'>

              <Link href={'/'}><Image src={logo} className='img-fluid' alt='Mingles' width={292.48} height={66.853} ></Image></Link>


              <button type="button" className={cls(styles.buttons, fontAgrandir.className, "btn btn-outline-dark")}>Download PDF</button>


              <button type="button" className={cls(styles.buttons, fontAgrandir.className, "btn btn-outline-dark")}>Join Mingles</button>

          </div>
        </div>
        <div className='col-3 text-end'>
          <Link href="#"> <Image className='img-fluid m-1' src={twitter} alt='mingle-twitter' width={61.281} height={61.281} ></Image> </Link>
          <Link href="#"> <Image className='img-fluid m-1' src={telegram} alt='mingle-telegram' width={61.281} height={61.281} ></Image> </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer