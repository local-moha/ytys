import React, { Component } from 'react'
import { Popup, Calendar } from 'zarm'
import style from '../assets/css/calender.module.css'
import { orderDate, Date2CN, countDate } from '../filters'
export default class CalendarJsx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: {
                popBottom: false,
            },
            value: localStorage.orderDate ? [JSON.parse(localStorage.orderDate).start_date, JSON.parse(localStorage.orderDate).end_date] : [orderDate(Date.now()), orderDate(Date.now() + 1000 * 60 * 60 * 24)],
            calendarProps: {
                visible: false,
                multiple: true,
                min: orderDate(Date.now()),
                max: orderDate(Date.now() + 1000 * 60 * 60 * 24 * 60),
                dateRender: (date) => {
                    if (/(0|6)/.test(date.getDay())) {
                        return (
                            <div className="custom">
                                <div className="custom__date">{date.getDate()}</div>
                            </div>
                        );
                    }
                    return date.getDate();
                },
                // disabledDate: (date) => /(0|6)/.test(date.getDay())
            }
        }

    }
    toggle = (key) => {
        const visible = this.state.visible;
        this.setState({
            visible: {
                ...visible,
                [key]: !visible[key]
            }
        });
    }
    render() {
        // console.log(this.props);
        const { visible } = this.state;
        return (
            <React.Fragment>
                {/* 日期封成公共组件 */}
                <div className={style.join_item} onClick={() => { this.toggle('popBottom'); }}>
                    <div className={`${style.jitem_item} ${style.fl}`}>
                        <div className={style.jitem_action}>入住</div>
                        <div className={style.jitem_date}>
                            {
                                localStorage.orderDate ? Date2CN(JSON.parse(localStorage.orderDate).start_date) : Date2CN(orderDate(Date.now()))
                            }
                        </div>
                    </div>
                    <div className={style.jitem_duaring}>
                        {
                            localStorage.orderDate ? countDate(JSON.parse(localStorage.orderDate).start_date, JSON.parse(localStorage.orderDate).end_date) : countDate(orderDate(Date.now()), orderDate(Date.now() + 1000 * 60 * 60 * 24))
                        }
                    </div>
                    <div className={`${style.jitem_item} ${style.fr}`}>
                        <div className={style.jitem_action}>离开</div>
                        <div className={style.jitem_date}>
                            {
                                localStorage.orderDate ? Date2CN(JSON.parse(localStorage.orderDate).end_date) : Date2CN(orderDate(Date.now() + 1000 * 60 * 60 * 24))
                            }
                        </div>
                    </div>
                </div>

                <Popup
                    visible={visible.popBottom}
                    direction="bottom"
                    onMaskClick={() => { this.toggle('popBottom') }}
                    destroy={false}
                    mask={false}
                >
                    <Calendar
                        className={style.chosetime}
                        value={this.state.value}
                        {...this.state.calendarProps}
                        onChange={(value) => {
                            // console.log('onChange', value);
                            const start_date = orderDate(value[0]);
                            const end_date = orderDate(value[1]);
                            const date = []
                            date.push(start_date)
                            date.push(end_date)
                            this.setState({
                                value: date
                            });
                        }}
                    ></Calendar>
                    <div className={style.btn_sure} onClick={() => {
                        this.toggle('popBottom');
                        // const 
                        localStorage.orderDate = JSON.stringify({
                            start_date: this.state.value[0],
                            end_date: this.state.value[1]
                        })
                    }}>确定</div>
                </Popup>

            </React.Fragment >
        )
    }
}
