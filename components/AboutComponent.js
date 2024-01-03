'use client'
import React from 'react'
import styles from '../styles/About.module.css'
import cls from 'classnames'
import fondo1 from '../public/assets/fondos/fondoNoche.png'
import mingles from '../public/assets/Logo/minglesLogoBlanco.png'
import worm from '../public/assets/wormCompleto.png'
import artist from '../public/assets/personajes/c7a.png'
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
    <div>
    
        <main className={cls(styles.contenido)}>
            {/*<Image src={fondo1} className={cls(styles.image, 'img-fluid')} alt='About-Mingles' width={1364.009} height={1470.572} />*/}
            <div className={cls(styles.contenido, '')}>
                <div className='mt-2 p-4'>
                    <Image src={mingles} className={cls(styles.mi, 'img-fluid')} alt='About-Mingles' width={400.982} height={130.723} />
                </div>
                <div className={cls(styles.caja, 'row text-center justify-content-center')}>
                    <p className={cls(fontQuirky.className, styles.tequila, 'mb-1')}>
                        Tequila meets web3
                    </p>
                    <p className={cls(fontAgrandir.className, styles.text1, 'p-4')}>
                        Centered around our unique 
                        Tequila Worms - the Mingles. 
                        It's a digital collectible project of 
                        4,000 NFT's in Ethereum that tells the 
                        untold stories of the tequila world.
                    </p>
                </div>
                <div className=''> {/**d-flex flex-column  justify-content-center align-items-center */}
                <div className={cls('row text-center justify-content-center')}>
            
                <p className={cls(fontAgrandir.className, styles.textBox2, styles.box)}>
                    <span className={cls(fontQuirky.className, styles.textBox1, 'mb-5')}>
                        Exclusive NFTs
                    </span> <br/>
                    Our NFTs offer more than ownership; 
                    they're a gateway to a world of privileges, 
                    community engagement, and unique 
                    collectibles, combined with real-world 
                    tequila-themed assets. 
                </p>
                </div>

                <div className={cls('row text-center justify-content-center')}>
                    
                    <p className={cls(fontAgrandir.className, styles.textBox2, styles.box)}>
                        <span className={cls(fontQuirky.className, styles.textBox1)}>
                            Vibrant Community
                        </span> <br/>
                        We bring together anime fans, crypto 
                        enthusiasts , and tequila lovers in a space 
                        that celebrates digital 
                        interaction and real-life experiences.
                    </p>
                </div>

                <div className={cls('row text-center justify-content-center')}>
                    
                    <p className={cls(fontAgrandir.className, styles.textBox2, styles.box)}>
                        <span className={cls(fontQuirky.className, styles.textBox1)}>
                            Sustainable 
                            Business Model
                        </span> <br/>
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
            <div className={cls('d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3')}>
                <Image src={artist} className={cls('img-fluid')} alt='Worm-Mingles' width={289} height={289} />
                <p className={cls(fontAgrandir.className, styles.artist2, 'text-start')}>
                    <p className={cls(fontQuirky.className, styles.artist1)}>Meet the Artist</p>
                    Xesus Bobomb <br />
                    25-year-old-self-taught character artist from Tbilisi,
                    Georgia. Projects include animation for FC Liverpool,
                    and illustrations and branding for Red Bull Car Park 
                    Drift Georgia and Red Bull Bakuriani.
                </p>
            </div>
        </div>
        <div className={cls(styles.wormB, 'row text-center align-items-center justify-content-center p-5')}>
            <div className={cls('d-flex flex-column flex-sm-row justify-content-center align-items-center')}>
                <p className={cls(fontAgrandir.className, styles.wormText)}>
                    Join us at the crossroads of tequila <br />
                    tradition and digital innovation, and <br />
                    be part of a community redefining <br />
                    the NFT space.
                </p>
                <div className={cls('col-sm-4 col-12')}>
                    <Image src={worm} className={cls('img-fluid')} alt='Worm-Mingles' width={180} height={180} />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AboutComponent