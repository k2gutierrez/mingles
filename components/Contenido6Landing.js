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
    <main className={cls(styles.contenido, '')}>
        <div className={cls('')}>
          <p className={cls(fontQuirky.className, styles.our, 'mt-3')}>our Team</p> 
        </div>
        <div className='row text-center align-items-center justify-content-center'>
        <div className={cls(styles.scroll, 'overflow-auto row text-center')}>
            <Scroll /> 
        </div>
        </div>
        
    </main>
  )
}

export default Contenido6Landing