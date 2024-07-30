import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {results_leus} from "../../Assets/Images/Results";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={'customContainer'}>
            <h1>Приклад 4 (Бібліотека React-Slick)</h1>
            <a href="https://react-slick.neostack.com/docs/example" target={'_blank'}>Приклади лібки</a>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                    <div>
                        <img style={{width: '100%', height: '100%'}} src={results_leus} alt=""/>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default MultipleItems;
