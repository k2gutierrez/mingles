import React from 'react'
import styles from '../styles/Contenido5Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import manifesto from '../public/assets/manifesto.png' 
import localFont from 'next/font/local'
import ModalEmail2 from './ModalEmail2'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido5Landing() {
  return (
    <main className={cls(styles.fondo, 'text-center')}>
        <div className={cls('row align-items-center p-5')}>
            <div className={cls(styles.manifesto, 'col-sm-6 col-12 text-sm-end my-3')}>
                <Image src={manifesto} className={cls(styles.WormCircle, 'img-fluid me-3')} alt='Ninja-Mingles' width={246} height={246} /> 
            </div>
            <div className={cls(styles.caja, 'col-sm-6 col-12 my-3 text-center text-sm-start')}>
                <p className={cls(fontQuirky.className, styles.text1, '')}>
                    JOiN OUR CAUSE
                </p>
                <p className={cls(fontAgrandir.className, styles.text2, 'mb-4')}>
                    Join the Mingles Adventure! 
                    Read our Manifesto, delve into the tequila 
                    tales, and become part of our community. 
                    Get exclusive updates on our journey - all 
                    starting with a click. Let&apos;s Mingle!
                </p>

                <ModalEmail2 />       
            </div>
        </div>
    </main>
  )
}

export default Contenido5Landing
