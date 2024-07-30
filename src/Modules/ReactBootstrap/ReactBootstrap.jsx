import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {results_leus} from "../../Assets/Images/Results";
import 'bootstrap/dist/css/bootstrap.min.css';

function ReactBootstrap() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={'customContainer'}>
            <h1>Приклад 3 (Бібліотека ReactBootstrap)</h1>
            <a href="https://react-bootstrap.netlify.app/docs/components/carousel" target={'_blank'}>Приклади лібки</a>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{width: '100%', height: '400px'}} src={results_leus} alt=""/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width: '100%', height: '400px'}} src={results_leus} alt=""/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width: '100%', height: '400px'}} src={results_leus} alt=""/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></div>
    );
}

export default ReactBootstrap;