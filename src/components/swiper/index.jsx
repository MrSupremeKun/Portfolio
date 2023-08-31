import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import { gitWebsites } from "../../components/github";
import { Link } from "react-router-dom";
import classNames from "classnames";


function  Swiper() {
  return (
    <div>
        <Swiper
        scrollbar={{
          hide: true,
        }}>
            
        </Swiper>
    </div>
  )
}

export default Swiper