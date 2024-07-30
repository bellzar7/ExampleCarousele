// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {results_leus} from "../../Assets/Images/Results";

export default () => {
    return (
        <div className={'customContainer'}>
            <h1>Приклад 2 (Бібліотека Swiper)</h1>
            <a href="https://swiperjs.com/demos" target={'_blank'}>Приклади лібки</a>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img style={{width: '100%'}} src={results_leus} alt=""/></SwiperSlide>
            <SwiperSlide><img style={{width: '100%'}} src={results_leus} alt=""/></SwiperSlide>
            <SwiperSlide><img style={{width: '100%'}} src={results_leus} alt=""/></SwiperSlide>
            <SwiperSlide><img style={{width: '100%'}} src={results_leus} alt=""/></SwiperSlide>
            ...
        </Swiper></div>
    );
};