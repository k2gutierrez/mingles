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
    <main className={cls(styles.fondo, 'row mt-5')}>
        <Image src={fondo1} className='img-fluid mt-5 d-none d-md-block' alt='Join-Mingles' width={1159} height={647} />
        <Image src={fondo2} className='img-fluid mt-5 d-md-none' alt='Join-Mingles' width={728} height={1009.5} />
        <div className={cls(styles.contenido, 'row text-center justify-content-center')}>
            <div className='row align-items-center mt-5 mb-md-4 mb-2'>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className={cls(fontQuirky.className, styles.text1, styles.contorno, 'row')}>
                        <p className={styles.quirk}>Let&apos;s buy a <br/> tequila distillery <br/> together!</p>
                    </div>
                    <div className='mt-4'>
                        <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-light me-1")} >Download PDF</button>
                        <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-light ms-1")} >Join Mingles</button>
                    </div>
                </div>
                <div className='col-md-4 col-6'>
                    <Image className={cls(styles.wormImg, 'img-fluid')} src={WormCircle} alt='Mingle' width={350} height={350} />
                </div>
                <div className='col-md-4 col-sm-12 col-6 pt-4'>
                    <div className='row'>
                        <p className={cls(fontQuirky.className, styles.nftproject, styles.contorno2)}>NFT PROJECT</p>
                        <p className={cls(fontAgrandir.className, styles.textNftProject)}>4,000 Mingles (Tequila <br/> Worms) on Ethereum</p>
                    </div>
                    <Slider />
                </div>
            </div>
            <div className={cls('row mt-lg-5 mt-2')}>
                <p className={cls(fontQuirky.className, styles.forsaken, styles.contorno)}>The foresaken story of Tequila</p>
                <div className='mt-5'>
                <Image src={recurso} className='img-fluid' alt="y'all Mingle!" width={528} height={809.5} />
                </div>
                {/*<p className={cls(fontAgrandir.className, styles.forsaken2)}>A <span className={cls(fontAgrandir.className, styles.worm)}>worm</span> call for y&apos;all to Mingle. <br/> It's time to bring our legacy back.</p>*/}
            </div>
        </div>
    </main>
  )
}

export default Contenido1Landing
