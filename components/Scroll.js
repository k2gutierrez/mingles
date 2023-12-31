import React from 'react'
import styles from '../styles/Scroll.module.css'
import cls from 'classnames'
import Image from 'next/image'
import c1 from '../public/assets/personajes/c1.png'
import c2 from '../public/assets/personajes/c2.png'
import c3 from '../public/assets/personajes/c3.png'
import c4 from '../public/assets/personajes/c4.png'
import c5 from '../public/assets/personajes/c5.png'
import c6 from '../public/assets/personajes/c6.png'
import c7 from '../public/assets/personajes/c7.png'
import localFont from 'next/font/local'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

export default function Scroll() {
  return (
    <>
        
        <div class={cls(styles.over, "row")}>
  <div class="">
    <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div className={cls(fontAgrandir.className, 'row')}>

        <div className='col-md-6 col-12'>
            <div className='row align-items-center'>
                <div className='col-3'>
                    <div className='row'>
                        <Image src={c1} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>MBA Guillermo Gutierrez</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Chief Marketing Officer Grupo Escala USA
                        </p>
                        <p className={cls(styles.text2)}>
                            Master in Business Management and Administration & Master in Blockchain & Crypto. CMO at Grupo Escala 
                            U.S.A, specialized in promoting alcoholic beverages and entertainment in Guadalajara.
                        </p>
                    </div>
                </div>
                
                <div className='col-3'>
                    <div className='row'>
                        <Image src={c2} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>honey B.</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Chief brand officer @cetsfk
                        </p>
                        <p className={cls(styles.text2)}>
                            Manifests high-impact growth strategies. Has generated 500M+ impressions, $5M+ in sales, 100M+ in revenue - 
                            fusing culture and marketing to unite tribes around purpose.
                        </p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='row'>
                        <Image src={c3} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>IRENE ZAMBRANO</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Design and Brand Advisro for Mingles
                        </p>
                        <p className={cls(styles.text2)}>
                            Advertising and communications specialist with expertise in Web 3.0 design, branding, digital and fashion marketing. 
                            Specializes in responsive web design, UI/UX, and development, content creation, creative direction, and 
                            fashion styling.
                        </p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='row'>
                        <Image src={c4} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>emmanuel delva</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Law & Tech at Delva & Asociados
                        </p>
                        <p className={cls(styles.text2)}>
                            Law & Tech. PhD in Law. Professor at the University of Guadalajara. SNI Researcher. President of the Academy 
                            of Economic, Business and International Law at CUCEA.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <div className='col-md-6 col-12'>
            <div className='row align-items-center'>

                <div className='col-3'>
                    <div className='row'>
                        <Image src={c5} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>VICTOR SANDOVAL</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Founder of Tequila Disanty
                        </p>
                        <p className={cls(styles.text2)}>
                            3rd Generation Agave farmer, Master Tequila Distiller, Owns lands in Arenal, Jalisco and is currently building 
                            Disanty Distillery.
                        </p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='row'>
                        <Image src={c6} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>Carlos GUTIERREZ</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Chief Information Security Officer at CEDEM
                        </p>
                        <p className={cls(styles.text2)}>
                            With a Master&apos;s in Cybersecurity he specializes in programming and developing blockchain dapps. Renowned 
                            for integrating cutting-edge security measures with project management to fortify and advance the company&apos;s digital infrastructure.
                        </p>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='row'>
                        <Image src={c7} className='img-fluid' alt="Don't miss out" width={122.23} height={122.23} />
                    </div>
                </div>
                <div className='col-9 p-3'>
                    <p className={cls(fontQuirky.className, styles.titles, 'text-start')}>xesus bobomb</p>
                    <div className={cls(styles.cont, 'text-start p-3')}>
                        <p className={cls(styles.text1)}>
                            Digital Character Artist
                        </p>
                        <p className={cls(styles.text2)}>
                            25-year-old self-taught character artist from Tbilisi, Georgia. Projects include animation for FC Liverpool, and 
                            illustrations and branding for Red Bull Car Park Drift Georgia and Red Bull Bakuriani.
                        </p>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  </div>
</div>

    </>
  )
}
