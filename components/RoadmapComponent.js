import React from 'react'
import styles from '../styles/Roadmap.module.css'
import Image from 'next/image'
import mingle from '../public/assets/Logo/Mingles_Logo_Color_Mesa_de_trabajo_1.png'
import r1 from '../public/assets/r1.png'
import r2 from '../public/assets/r2.png'
import r3 from '../public/assets/r3.png'
import r4 from '../public/assets/r4.png'
import r5 from '../public/assets/r5.png'
import r6 from '../public/assets/r6.png'
import r7 from '../public/assets/r7.png'
import r8 from '../public/assets/r8.png'
import r9 from '../public/assets/r9.png'
import here from '../public/assets/WeAreHere_Final-19.png'
import cls from 'classnames'
import localFont from 'next/font/local'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf' 
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function RoadmapComponent() {
  return (
    <div className={cls(styles.contenido, 'row align-items-center justify-content-center text-center pt-1')}>
        
        <Image src={mingle} className={cls(styles.mingle, 'img-fluid mb-0')} alt='Mingles' width={246} height={246} /> 
        
        <p className={cls(fontQuirky.className, styles.roadmap, 'mb-0')}>ROADMAP</p>

        <div className={cls(styles.scroll, 'overflow-auto row align-items-center justify-content-center text-center')}>

            <div className={cls(styles.posHere, 'row align-items-center')}>
                <div className='col-7'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Manifesto & 'Agave Chronicles' Launch
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        The journey begins. Experience the first chapter of our exclusive 'Agave Chronicles' as we unveil the Mingles world.
                    </p>
                </div>
                <div className={cls('col-5 text-start')}>
                    <div className={cls(styles.here)}>
                        <Image src={here} className={cls(styles.hereImg, '')} alt='Here' width={100} height={50} />
                    </div>
                    <Image src={r1} className={cls(styles.imagenes, '')} alt='Manifesto' width={400} height={400} />
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7 text-end'>
                    <Image src={r2} className={cls(styles.imagenes, 'img-fluid')} alt='Rally' width={400} height={400} />
                </div>
                <div className='col-5'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Mingle Rally
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        A call to arms for enthusiasts to unite, share, and create the vibrant Mingles community.
                    </p>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Mint Day
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        Secure your piece of the story with the official release of Mingles NFTs, packed with early-worms perks.
                    </p>
                </div>
                <div className='col-5 text-start'>
                    <Image src={r3} className={cls(styles.imagenes, 'img-fluid')} alt='Mint Day' width={400} height={400} />
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7 text-end'>
                    <Image src={r4} className={cls(styles.imagenes, 'img-fluid')} alt='Distillery Acquisition' width={400} height={400} />
                </div>
                <div className='col-5'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Distillery Acquisition
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        Expanding our horizons by integrating a real-world tequila distillery into the Mingles narrative.
                    </p>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        L.A. Mingle Fiesta
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        A physical celebration of our journey, inviting members to a night of culture and connection in Los Angeles.
                    </p>
                </div>
                <div className='col-5 text-start'>
                    <Image src={r5} className={cls(styles.imagenes, 'img-fluid')} alt='LA Mingle Fiesta' width={400} height={400} />
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7 text-end'>
                    <Image src={r6} className={cls(styles.imagenes, 'img-fluid')} alt='Art book and decanter dispatch' width={400} height={400} />
                </div>
                <div className='col-5'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Art-Book & Decanter Dispatch
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        Delivery of 'Agave Chronicles' and bespoke Tequila Decanters to our community.
                    </p>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Distillery Debut
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        Opening the doors to our very own tequila production, inviting the community to witness the craft.
                    </p>
                </div>
                <div className='col-5 text-start'>
                    <Image src={r7} className={cls(styles.imagenes, 'img-fluid')} alt='Distillery Debut' width={400} height={400} />
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7 text-end'>
                    <Image src={r8} className={cls(styles.imagenes, 'img-fluid')} alt='STO Introduction' width={400} height={400} />
                </div>
                <div className='col-5'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        STO <br/>
                        Introduction
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        Elevating community investment with a Security Token Offering, paving the way for shared success.
                    </p>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-7'>
                    <p className={cls(fontQuirky.className, styles.title)}>
                        Mingle Odyssey
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text)}>
                        Show the world what we can do and capitalize like crazy.
                    </p>
                </div>
                <div className='col-5 text-start'>
                    <Image src={r9} className={cls(styles.imagenes, 'img-fluid')} alt='Mingle Odyssey' width={400} height={400} />
                </div>
            </div>

        </div>

    </div>
  )
}

export default RoadmapComponent