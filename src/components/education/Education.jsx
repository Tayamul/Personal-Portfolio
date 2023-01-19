import React from 'react'
import './education.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Education = () => {
  return (
    <section id="education">
        <h5>Academies I Attended</h5>
        <h2>Education</h2>

        <Swiper className="container education__container"
         // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
            <SwiperSlide className="education">
                <div className="education-item">
                   <h3 className="education-title">Brunel University</h3>
                </div>
                <h5 className='education-subject'>BSc Mathematics with Computer Science</h5>
                <small className='education-grade'>2:1</small> 
            </SwiperSlide>
            <SwiperSlide className="education">
                <div className="education-item">
                   <h3 className="education-title">Haydon School</h3>
                </div>
                <h5 className='education-subject'>Applied ICT</h5>
                <small className='education-grade'>B</small> 
                <h5 className='education-subject'>Mathemtics</h5>
                <small className='education-grade'>C</small>
                <h5 className='education-subject'>Economics</h5>
                <small className='education-grade'>D</small>               
            </SwiperSlide>
            <SwiperSlide className="education">
                <div className="education-item">
                   <h3 className="education-title">West London Academy</h3>
                </div>
                <h5 className='education-subject'>Mathematics</h5>
                <small className='education-grade'>A*</small> 
                <h5 className='education-subject'>Science</h5>
                <small className='education-grade'>B</small> 
                <h5 className='education-subject'>English</h5>
                <small className='education-grade'>C</small> 
            </SwiperSlide>
        </Swiper>  
    </section>
  )
}

export default Education