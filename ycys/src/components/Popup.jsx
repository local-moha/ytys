import React, { Component } from 'react';
import { Popup, Cell, Button, Picker, Toast, Modal, Loading } from 'zarm';
import Axios from 'axios';
import style from '../assets/css/popup.module.css'

class ActionSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: {
                popBottom: false,
            },
            city: [],
            _: localStorage.city_code || 1588583613122,
            city_code:''
        }
    }
    toggle = (key) => {
        const visible = this.state.visible;
        this.setState({
            visible: {
                ...visible,
                [key]: !visible[key]
            },
        });
        // console.log(visible,this.state.visible);
    }
    componentDidMount() {

    }
    render() {
        const { visible} = this.state;
        return (
            <div>
                <Cell
                    description={
                        <Button size="xs" onClick={() => { this.toggle('popBottom'); }}>全部城市</Button>
                    }
                >
                </Cell>
                <Popup
                    visible={visible.popBottom}
                    direction="bottom"
                    mask={false}
                    onMaskClick={ async() => {await this.toggle('popBottom') }}
                    destroy={false}
                >
                    <div className='popup-box-top'>
                        <div  className={`${style.area_item} ${style.active_item}`}>全国城市</div>
                       {this.state.city.map(v=>{
                         return ( <div className={style.area_item} key={v.city_code} onClick={this.change_city_code.bind(this)}>{v.city_name}({v.master_count})</div>)
                       })}
                    </div>
                </Popup>
            </div>
        );
    }
    change_city_code(e){
        this.state.visible.popBottom=false;
        e.target.className=`${style.area_item} ${style.area_item}`
        this.setState({
            city_code:e.target.key
        })
    }
   async componentDidMount(){
        const cityInfo = await Axios.get(`/minsu/coupon/index/city?_=${this.state._}`)
        console.log(cityInfo.data.data);
        this.setState({
            city:cityInfo.data.data
        })
    }

}


export default ActionSheet;