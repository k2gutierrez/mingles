import React from 'react'
import styles from '../styles/Contenido1Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import fondo1 from '../public/assets/fondos/primerFondo.png'
import fondo2 from '../public/assets/fondos/agavebackground_Vertical.png'
import WormCircle from '../public/assets/Logo/MingleToRound.png'
import recurso from '../public/assets/recurso14.png'
import localFont from 'next/font/local'
import Slider from './Slider'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido1Landing() { 
  return (
    <main className={cls(styles.fondo, 'pt-5')}>
        <div className={cls(styles.contenido, 'row align-items-center px-4')}>
            <div className='col-md-4 col-6'>
                <div className={cls(fontQuirky.className, styles.text1, styles.contorno, 'row')}>
                    <p className={styles.quirk}>Let&apos;s buy a <br/> tequila distillery <br/> together!</p>
                </div>
                <div className=''>
                    <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-light my-1")} >Download Manifesto</button>
                    <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-light my-1")} >Join Mingles</button>
                </div>
            </div>
            <div className='col-md-4 col-12 order-first'>
                <Image className={cls(styles.wormImg, 'img-fluid')} src={WormCircle} alt='Mingle' width={350} height={350} />
            </div>
            <div className='col-md-4 col-6'>
                <div className='row'>
                    <p className={cls(fontQuirky.className, styles.nftproject, styles.contorno2)}>NFT PROJECT</p>
                    <p className={cls(fontAgrandir.className, styles.textNftProject)}>4,000 Mingles (Tequila <br/> Worms) on Ethereum</p>
                </div>
                <Slider />
            </div>
        </div>
        <div className={cls('row px-4 pt-2')}>
            <p className={cls(fontQuirky.className, styles.forsaken, styles.contorno)}>The foresaken story of Tequila</p>
            <div className=''>
            <Image src={recurso} className='img-fluid' alt="y'all Mingle!" width={528} height={809.5} />
            </div>
            {/*<p className={cls(fontAgrandir.className, styles.forsaken2)}>A <span className={cls(fontAgrandir.className, styles.worm)}>worm</span> call for y&apos;all to Mingle. <br/> It's time to bring our legacy back.</p>*/}
        </div>

    </main>
  )
}

export default Contenido1Landing
