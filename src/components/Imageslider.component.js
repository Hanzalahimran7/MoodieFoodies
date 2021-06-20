import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../Image/1.jpeg'
import second from '../Image/2.jpg'
import third from '../Image/3.jpg'

const Imageslider = (props) => {
    return (
        <div>
            <Carousel interval={3000} prevIcon="" prevLabel="" nextIcon="" nextLabel="">
                <Carousel.Item >
                    <img 
                        src={first} 
                        className="d-block w-100"
                        alt="First slide"
                        height="500px"
                        >
                    </img>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        src={second} 
                        className="d-block w-100"
                        alt="First slide"
                        height="500px"
                        >
                    </img>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        src={third} 
                        className="d-block w-100"
                        alt="First slide"
                        height="500px"
                        >
                    </img>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Imageslider
