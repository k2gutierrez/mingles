'use client'
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
import Link from 'next/link'
import ModalEmail from './ModalEmail'
/////
const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})


function Contenido1Landing() { 

  return (
    <main className={cls(styles.fondo, 'pt-5 align-items-center')}>
        <div className={cls(styles.contenido, 'row align-items-center justify-content-center px-4')}>
            <div className='col-md-4 col-12 order-md-1 order-3'>
                <div className='row align-items-center'>
                    <div className={cls(fontQuirky.className, styles.text1, styles.contorno, 'col-md-12 col-6')}>
                        <p className={styles.quirk}>Let&apos;s buy a <br/> tequila distillery <br/> together!</p> 
                    </div>
                    <div className={cls('col-md-12 col-6')}>
                        <ModalEmail />
                        {/*<form>
                            <button type='submit' formAction={send} className="btn btn-transparent" >
                                <Image src=''  className={cls(styles.myButton2, 'img-fluid')} width={150} height={50} alt='Download Manifesto' />
                            </button>
                            <Link href='https://waitlist.mingles.wtf/'>
                                <Image src=''  className={cls(styles.myButton1, 'img-fluid')} width={150} height={50} alt='Join-Mingles' />
                            </Link>
                        </form>*/}
                        
                        
                        {/*
                        <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-light my-1")} >Download Manifesto</button>
                        <button type="button" className={cls(fontAgrandir.className, styles.buttons, "btn btn-light my-1")} >Join Mingles</button>
                        */}
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-4 order-md-2 order-1'>
                <Image className={cls(styles.wormImg, 'img-fluid')} src={WormCircle} alt='Mingle' width={350} height={350} />
            </div>
            <div className='col-md-4 col-6 order-md-3 order-4 mb-md-0 mb-3'>
                <div className='row'>
                    <p className={cls(fontQuirky.className, styles.nftproject, styles.contorno2)}>NFT PROJECT</p>
                    <p className={cls(fontAgrandir.className, styles.textNftProject)}>4,000 Mingles (Tequila <br/> Worms) on Ethereum</p>
                </div>
                <Slider />
            </div>
            <div className='col-md-12 col-8 order-md-4 order-2 pt-md-0 pt-5'>
                <p className={cls(fontQuirky.className, styles.forsaken, styles.contorno)}>The forsaken story of Tequila</p>
            </div>
        </div>
        <div className={cls('row px-4 pt-2')}>
            
            <div className=''>
            <Image src={recurso} className={cls(styles.call, 'img-fluid')} alt="y'all Mingle!" width={300} height={809.5} />
            </div>
            {/*<p className={cls(fontAgrandir.className, styles.forsaken2)}>A <span className={cls(fontAgrandir.className, styles.worm)}>worm</span> call for y&apos;all to Mingle. <br/> It's time to bring our legacy back.</p>*/}
        </div>

    </main>
  )
}

export default Contenido1Landing
