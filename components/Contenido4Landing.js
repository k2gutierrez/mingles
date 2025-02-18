import React from 'react'
import styles from '../styles/Contenido4Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import fondo1 from '../public/assets/rectangle4.png'
import localFont from 'next/font/local'
import n1 from '../public/assets/n1.png'
import n2 from '../public/assets/n2.png'
import n3 from '../public/assets/n3.png'
import Link from 'next/link'
import joinMingles from '../public/assets/buttons/JOIN_MINGLES_buttonUP.png'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido4Landing() { 
  return (
    <main className={cls(fontQuirky.className, styles.contenido, 'row')}>
        <div className='row'>
            <p className={cls(styles.text1, styles.contorno, 'pt-4 pb-1')}>
                DoN&apos;T MiSS ouT 
            </p>
        </div>
        <div className='col-sm-4 col-12'>
            <Image src={n1} className={cls(styles.n1, 'img-fluid p-1')} alt="1" width={316} height={484} />
        </div>
        <div className='col-sm-4 col-12'>
            <Image src={n2} className={cls(styles.n2, 'img-fluid p-1')} alt="2" width={327} height={490} />
        </div>
        <div className='col-sm-4 col-12'>
            <Image src={n3} className={cls(styles.n3, 'img-fluid p-1')} alt="3" width={355} height={488} />
        </div>
        <div className=''>
            <Link href='https://t.me/+GSt8l8YvobYxMmFh'><Image src={joinMingles}  className={cls(styles.buttons, 'img-fluid')}  alt='Join Mingles' /></Link>
                 {/*width={150} height={80}*/}
        </div>
        
    </main>
  )
}

export default Contenido4Landing