import React from "react";
import '../App.css';
import './Css/style.css';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../Img/slideshow01.jpeg';
import img2 from '../Img/slideshow02.jpeg';
import img3 from '../Img/slideshow03.jpeg';
import roupas from '../Img/roupas.png';
import calcados from '../Img/calcados.png';
import acessorios from '../Img/acessorios.png';

export default function Home() {
    return (
        <div id="home">
            <Carousel interval={2500}>
                <Carousel.Item>
                    <img src={img1} alt="Roupas"/>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img src={img2} alt="Calçados"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} alt="calças"/>
                </Carousel.Item>
            </Carousel>

            <section id="container">
                <article className="box">
                    <p className="link-pages">Roupas</p>
                    <img src={roupas} alt="Roupas" id="roupas"/>
                </article>

                <article className="box">
                    <p className="link-pages">Calçados</p>
                    <img src={calcados} alt="Roupas" id="calcados"/>
                </article>

                <article className="box">
                    <p className="link-pages">Acessórios</p>
                    <img src={acessorios} alt="Roupas" id="acessorios"/>
                </article>
            </section>
        </div>
    );
}

