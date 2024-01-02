import React from 'react'
import styles from '../styles/Contenido6Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import fondo1 from '../public/assets/fondos/fondoLast.png'
import localFont from 'next/font/local'
import Scroll from './Scroll'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido6Landing() {
  return (
    <main className={cls(styles.fondo, 'row align-items-center')}>
        <Image src={fondo1} className='img-fluid' alt="Don't miss out" width={1366.66} height={765.93} />
        <div className={cls(styles.cont)}>
          <p className={cls(fontQuirky.className, styles.our)}>our Team</p> 
        </div>
        <div className={cls(fontQuirky.className, styles.contenido, 'overflow-auto row text-center')}>
            <Scroll />  
        </div>
        
    </main>
  )
}

export default Contenido6Landing