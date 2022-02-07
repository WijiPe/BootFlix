import React, { Component } from 'react';
import ReactDOM from "react-router-dom";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/scroller.css'
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from "@mui/icons-material/ArrowRight";
import ButtonBase from "@material-ui/core/ButtonBase";
import Link from "@material-ui/core/Link";



class Posters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posters: [...props.popularPosters]
        };

    }
    renderArrows = () => {
        return (
            <div className="slider-arrow">
                <ButtonBase
                    className="arrow-btn prev"
                    onClick={() => this.slider.slickPrev()}
                >
                    <ArrowLeft />
                </ButtonBase>
                <ButtonBase
                    className="arrow-btn next"
                    onClick={() => this.slider.slickNext()}
                >
                    <ArrowRight />
                </ButtonBase>
            </div>
        );
    };
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6
        };
        return (
        
            <div>
                {this.renderArrows()}
                <Slider {...settings}>
                    {this.state.posters.map(function (poster, i) {
                        return (
                            <div key={i}>
                                <Link to={`/movie/details/${poster.id}`}><img className="image zoom" onClick={() => this.link(poster.id)} alt="no" src={"https://image.tmdb.org/t/p/w500/" + poster.poster_path} /></Link>
                            </div>
                        );
                    })}
                </Slider>
            </div >
        );
    }
}
const rootElement = document.getElementById("popular");
ReactDOM.render(<Posters />, rootElement);
