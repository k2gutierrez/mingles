'use client'
import React from 'react'
import cls from 'classnames'
import styles from '../styles/Slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import pfp1 from '../public/assets/PFP_Previews/pfp1.png'
import pfp2 from '../public/assets/PFP_Previews/pfp2.png'
import pfp3 from '../public/assets/PFP_Previews/pfp3.png'
import pfp4 from '../public/assets/PFP_Previews/pfp4.png'
import pfp5 from '../public/assets/PFP_Previews/pfp5.png'
import pfp6 from '../public/assets/PFP_Previews/pfp6.png'
import pfp7 from '../public/assets/PFP_Previews/pfp7.png'
import pfp8 from '../public/assets/PFP_Previews/pfp8.png'
import pfp9 from '../public/assets/PFP_Previews/pfp10.png'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'

register()

function Slider() {
  return (
    <div className={styles.slide}>
      <Swiper
        autoplay={true}
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502} src={pfp1} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp2} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp3} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp4} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp5} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp6} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp7} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp8} />
        </SwiperSlide>
        <SwiperSlide>
            <Image className={cls(styles.img, 'img-fluid')} alt='mingle' width={166.214} height={167.502}  src={pfp9} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider