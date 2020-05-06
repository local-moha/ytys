import React, { Component } from 'react'
import { Carousel } from 'zarm'
import style from '../assets/css/home.module.css'
// import LinesEllipsis from 'react-lines-ellipsis'
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
                                    <div className={style.swiper_desc}>
                                        {item.desc}
                                        {/* <LinesEllipsis
                                            text={item.desc}
                                            maxLine={3}
                                            ellipsis="..."
                                            trimRight
                                            basedOn="letters"
                                        /> */}
                                    </div>
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
                autoPlayIntervalTime={5000}
            >
                {swiperRender()}
            </Carousel>
        )
    }
}
