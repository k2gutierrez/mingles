import React from 'react'
import styles from '../styles/Contenido4Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import fondo1 from '../public/assets/rectangle4.png'
import localFont from 'next/font/local'
import n1 from '../public/assets/n1.png'
import n2 from '../public/assets/n2.png'
import n3 from '../public/assets/n3.png'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido4Landing() {
  return (
    <main className={cls(styles.fondo, 'row align-items-center')}>
        <Image src={fondo1} className='img-fluid' alt="mingles" width={1366.66} height={765.93} />
        <div className={cls(fontQuirky.className, styles.contenido, 'row text-center')}>
            <div className='row'>
                <p className={cls(styles.text1, 'mb-3 pt-5 p-1')}>
                    DON&apos;T MiSS OUT
                </p>
            </div>
            <div className='col-4'>
                <Image src={n1} className={cls(styles.n1, 'img-fluid')} alt="1" width={316} height={484} />
            </div>
            <div className='col-4'>
                <Image src={n2} className={cls(styles.n2, 'img-fluid')} alt="2" width={327} height={490} />
            </div>
            <div className='col-4'>
                <Image src={n3} className={cls(styles.n3, 'img-fluid')} alt="3" width={355} height={488} />
            </div>
            <div>
                <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-sm btn-light mt-5")} >Join Mingles</button>
            </div>
            
        </div>
    </main>
  )
}

export default Contenido4Landing
