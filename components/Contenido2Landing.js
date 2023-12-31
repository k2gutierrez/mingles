import React from 'react'
import styles from '../styles/Contenido2Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import fondo1 from '../public/assets/fondos/tierra.png'
import localFont from 'next/font/local'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido2Landing() {
  return (
    <main className={cls(styles.fondo, 'row align-items-center')}>
        <Image src={fondo1} className='img-fluid' alt='Join-Mingles' width={1462.78} height={538.77} />
        <div className={cls(fontAgrandir.className, styles.contenido, styles.contorno, 'row text-center justify-content-center')}>
            <p className={cls(styles.text2)}>
                &quot;Rise of <span className={styles.text1}>Tequila, </span> fall of the Mingles. <br/>
                In agave fields, our cradle, Industry&apos;s shadow loomed, <br/>
                threatening  our existence. We, the resilent few, now seek allies. <br/>
                <span className={styles.text2}>Join our epic revival.</span>&quot;
            </p>
        </div>
    </main>
  )
}

export default Contenido2Landing
