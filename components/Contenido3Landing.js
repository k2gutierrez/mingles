import React from 'react'
import styles from '../styles/Contenido3Landing.module.css'
import cls from 'classnames'
import Image from 'next/image'
import WormCircle from '../public/assets/Logo/MingleToRound2.png'
import monito from '../public/assets/Logo/monito.png'
import rectangle from '../public/assets/Logo/rectangulos.svg'
import localFont from 'next/font/local'

const fontQuirky = localFont({ 
    src: '../public/fonts/quirky/QuirkySunflower.otf'
} )

const fontAgrandir = localFont({
    src: '../public/fonts/agrandir/Agrandir-Regular.otf'
})

function Contenido3Landing() {
  return (
    <main className={cls(fontAgrandir.className, styles.fondo, '')}>
        <div className={cls(styles.caja, 'row justify-content-center align-items-center p-5')}>
            <div className={cls('col-5 text-end pe-sm-5')}>
                <Image src={WormCircle} className={cls(styles.WormCircle, 'img-fluid')} alt='Ninja-Mingles' width={246} height={246} /> 
            </div>
            <div className='col-7 text-start pe-sm-5'>
                <p className={cls(styles.text1, 'pe-sm-3')}>
                    We are building a Tequila 
                    Distillery to fight back 
                    Humans & Tequila Industry 
                    Leaders while sharing benefits 
                    with our community.
                </p>
            </div>
        </div>
        <div className={cls(fontAgrandir.className, 'row align-items-start justify-content-center p-4')}>
            <div className='col-sm-6 col-12'>
                <div className='row px-3'>
                    <div className='col-2 text-center'>
                        <Image src={monito} className={cls('img-fluid')} alt='monito' width={33.426} height={36.212} /> 
                    </div>
                    <div className='col-10'>
                        <p className={cls(styles.text2, '')}>
                            Global Tequila Market <br/>
                            $12.10 billion USD in 2022 / $13.35 billion USD in 2023, (CAGR) of 10.4%. Forecast for 2027 = $19.32 billion USD with a CAGR of 9.7%.
                        </p>
                        <div className={cls('text-end')}>
                            <p className={styles.text3}>researchandmarkets</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-12'>
                <div className='row px-3'>
                    <div className='col-2 text-center'>
                        <Image src={rectangle} className={cls('img-fluid')} alt='rectangle' width={52.925} height={47.354} /> 
                    </div>
                    <div className='col-10'>
                        <p className={cls(styles.text2, '')}>
                            Tequila Market in the United States <br/>
                            $8.3 billion USD in 2022 / Forecast for 2028 = $11.3 billion USD, (CAGR) of 5.26% during the period 2023-2028. 
                            As of 2023, only 204 NOMs (distilleries) are producing all the Tequila available in the market.
                        </p>
                        <div className={cls('text-end')}>
                            <p className={styles.text3}>imarcgroup</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contenido3Landing