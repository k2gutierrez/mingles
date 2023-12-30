'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import twitter from '../public/assets/Logo/twitter.svg'
import telegram from '../public/assets/Logo/telegram.png'
import cls from 'classnames'
import localFont from 'next/font/local'
import Link from 'next/link';

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
          <div className='row me-auto d-flex align-items-center'>
            <div className='col-sm-4 col-12'>

              <p className={cls(fontAgrandir.className, styles.text1, 'me-3')}>Mingle up</p>

            </div>
            <div className='col-sm-4 col-12'>

              <button type="button" className={cls(styles.buttons, fontAgrandir.className, "mb-2 btn btn-outline-dark")}>Download PDF</button>

            </div>
            <div className='col-sm-4 col-12'>

              <button type="button" className={cls(styles.buttons, fontAgrandir.className, "btn btn-outline-dark")}>Join Mingles</button>

            </div>
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