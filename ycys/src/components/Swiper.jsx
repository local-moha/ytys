import React, { Component } from 'react'
import { Carousel } from 'zarm'
import style from '../assets/css/home.module.css'
import LinesEllipsis from 'react-lines-ellipsis'
export default class Swiper extends Component {
    render() {
        const swiperRender = () => {
            return this.props.carouselList.map((item, i) => {
                // console.log(item);
                return (
                    <div className="carousel__item__pic" key={+i} onClick={() => {
                        // 跳转???????????
                        console.log(item.url);

                    }}>
                        <img className={style.swiper} src={item.image_url} alt="" draggable={false} />
                        {
                            item.desc ? (
                                <div className={style.swiper_title}>

                                    <LinesEllipsis
                                        className={style.swiper_desc}
                                        text={item.desc}
                                        maxLine='1'
                                        ellipsis="..."
                                        trimRight
                                        basedOn="letters"
                                    />

                                    <div className={style.swiper_subtitle}>{item.text}</div>
                                </div>) : ""
                        }

                    </div>
                );
            });
        }
        return (
            <Carousel
                autoPlay
                loop
                swipeable
                direction="left"
                showPagination
            >
                {swiperRender()}
            </Carousel>
        )
    }
}
