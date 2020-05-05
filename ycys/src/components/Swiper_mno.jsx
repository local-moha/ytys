import React, { Component } from 'react'
import { Carousel } from 'zarm'
// import LinesEllipsis from 'react-lines-ellipsis'
export default class Swiper extends Component {
    render() {
        const swiperRender = () => {
            return this.props.swiperList.map((item, i) => {
                // console.log(item);
                return (
                    <div className="carousel__item__pic" key={+i} onClick={() => {
                        // 跳转???????????
                        console.log(item.image);

                    }}>
                        <img src={item.middle} draggable={false} style={{
                            height: "250px",
                            touchAction: "pan-y"
                        }} />
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
                showPagination={false}
                autoPlayIntervalTime={5000}
            >
                {swiperRender()}
            </Carousel>
        )
    }
}
