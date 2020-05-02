import React, { Component } from 'react'
import { Button, Select, Icon, Input, Cell, Calendar } from 'zarm';

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            multiple: true,
            value: ['2019-10-11', '2019-10-17'],
            min: '2019-9-12',
            max: '2019-11-11',
            dateRender: (date) => {
                if (/(0|6)/.test(date.getDay())) {
                    return (
                        <div className="custom">
                            <div className="custom__date">{date.getDate()}</div>
                            <div className="custom__text">休息</div>
                        </div>
                    );
                }
                return date.getDate();
            },
            disabledDate: (date) => /(0|6)/.test(date.getDay())
        };
    }

    render() {
        const { multiple, min, max, visible } = this.state;

        return (
            <div>
                <div>
                    <Cell title="multiple">
                        <Select
                            visible={visible}
                            placeholder="multiple"
                            value={multiple ? 'true' : 'false'}
                            dataSource={[
                                {
                                    value: 'false',
                                    label: '单选'
                                },
                                {
                                    value: 'true',
                                    label: '双选'
                                }
                            ]}
                            onOk={(selected) => {
                                this.setState({
                                    multiple: selected[0].value === 'true',
                                    visible: false
                                });
                            }}
                        />
                    </Cell>
                    <Cell title="min">
                        <Input
                            type="text"
                            placeholder="请输入日历起始日期"
                            value={min}
                            onBlur={e => this.setState({ min: e })}
                        />
                    </Cell>
                    <Cell title="max">
                        <Input
                            type="text"
                            placeholder="请输入日历终止日期"
                            value={max}
                            onBlur={e => this.setState({ max: e })}
                        />
                    </Cell>
                </div>
                <div>
                    <Calendar
                        {...this.state}
                        onChange={(value) => {
                            this.setState({ value });
                            console.log('onChange', value);
                        }}
                    />
                </div>
            </div>
        );
    }
}
