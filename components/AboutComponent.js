'use client'
import React from 'react'
import styles from '../styles/About.module.css'
import cls from 'classnames'
import fondo1 from '../public/assets/fondos/fondoNoche.png'
import mingles from '../public/assets/Logo/minglesLogoBlanco.png'
import worm from '../public/assets/wormCompleto.png'
import artist from '../public/assets/personajes/c7.png'
import Image from 'next/image'
import localFont from 'next/font/local'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function AboutComponent() {
  return (
    <>
    
        <main className={cls(styles.mainContainer, styles.fondo)}>
            <Image src={fondo1} className={cls(styles.image, 'img-fluid')} alt='About-Mingles' width={1364.009} height={1470.572} />
            <div className={cls(styles.contenido)}>
                <div className='mt-2 mb-5'>
                    <Image src={mingles} className={cls(styles.mi, 'img-fluid')} alt='About-Mingles' width={561.982} height={130.723} />
                </div>
                <div className={''}>
                    <p className={cls(fontQuirky.className, styles.tequila, 'mb-4')}>
                        Tequila meets web3
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text1, 'mb-5')}>
                        Centered around our unique <br />
                        Tequila Worms - the Mingles. <br />
                        It's a digital collectible project of <br />
                        4,000 NFT's in Ethereum that tells the <br />
                        untold stories of the tequila world.
                    </p>
                </div>
                <div className='d-flex flex-column  justify-content-center align-items-center'>
                <div className={cls('row text-center justify-content-center mb-5')}>
            
                <p className={cls(fontAgrandir.className, styles.textBox2, styles.box)}>
                    <p className={cls(fontQuirky.className, styles.textBox1)}>
                        Exclusive NFTs
                    </p>
                    Our NFTs offer more than ownership; <br />
                    they're a gateway to a world of privileges, <br />
                    community engagement, and unique <br />
                    collectibles, combined with real-world <br />
                    tequila-themed assets. 
                </p>
                </div>

                <div className={cls('row text-center justify-content-center mb-5')}>
                    
                    <p className={cls(fontAgrandir.className, styles.textBox2, styles.box)}>
                        <p className={cls(fontQuirky.className, styles.textBox1)}>
                            Vibrant Community
                        </p>
                        We bring together anime fans, crypto <br />
                        enthusiasts , and tequila lovers in a space <br />
                        that celebrates digital <br />
                        interaction and real-life experiences.
                    </p>
                </div>

                <div className={cls('row text-center justify-content-center mb-5')}>
                    
                    <p className={cls(fontAgrandir.className, styles.textBox2, styles.box)}>
                        <p className={cls(fontQuirky.className, styles.textBox1)}>
                            Sustainable <br />
                            Business Model
                        </p>
                        We combine NFT sales with a real-world <br />
                        Tequila Distillery, ensuring a sustainable <br />
                        and community-focused <br />
                        business approach.
                    </p>
                </div>
                </div>
            </div>
        </main>
        <div className={cls(styles.artistB, 'row text-center justify-content-center p-5')}>
            <div className={cls('d-flex flex-column flex-sm-row justify-content-center align-items-center gap-5')}>
                <Image src={artist} className={cls('img-fluid')} alt='Worm-Mingles' width={289} height={289} />
                <p className={cls(fontAgrandir.className, styles.artist2, 'text-start')}>
                    <p className={cls(fontQuirky.className, styles.artist1)}>Meet the Artist</p>
                    Xesus Bobomb <br />
                    25-year-old-self-taught character artist from Tbilisi, <br />
                    Georgia. Projects include animation for FC Liverpool, <br />
                    and illustrations and branding for Red Bull Car Park <br />
                    Drift Georgia and Red Bull Bakuriani.
                </p>
            </div>
        </div>
        <div className={cls(styles.wormB, 'row text-center justify-content-center mb-5 p-5')}>
            <div className={cls('d-flex flex-column flex-sm-row justify-content-center align-items-center gap-5')}>
                <p className={cls(fontAgrandir.className, styles.wormText)}>
                    Join us at the crossroads of tequila <br />
                    tradition and digital innovation, and <br />
                    be part of a community redefining <br />
                    the NFT space.
                </p>
                <div className={cls('col-sm-4 col-12')}>
                    <Image src={worm} className={cls('img-fluid')} alt='Worm-Mingles' width={376} height={376} />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default AboutComponent