import React from 'react'
import styles from '../styles/Contenido7Landing.module.css'
import cls from 'classnames'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf' 
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf' 
})

function Contenido7Landing() {



  return (
    <main className={cls(styles.contenido, 'p-5')}>
      <div className={cls('row align-items-center justify-content-center')}>
        <Link href={'/termsandconditions'}><Image src=''  className={cls(styles.myButton, 'img-fluid')} width={150} height={80} alt='Terms and Conditions' /></Link>
      </div>
    </main>
  )
}

export default Contenido7Landing