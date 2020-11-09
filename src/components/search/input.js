import React from 'react';
import input from './input.module.css'
class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            hotList: ['红包', 'AJ11', '欧文4', '渔火', '江枫', '杨柳', '花灯', '落花', '烟雨']
        }

    }
    render() {
        let { hotList } = this.state
        return (
            <div>
                <div className={input.header}>
                    <div>
                        <input  className={input.input} type="text" placeholder="请搜索商品"/>
                        <div className="iconfont iconsousuo" style={{ width: '16px', fontSize: '14px',position:'absolute',top:16,left:15 }}></div>
                    </div>
                    <div onClick={this.cancelShowIput.bind(this)}>取消</div>
                </div>
                <div className={input.history}>
                    <div className={input.hot_text}>热门搜索</div>
                    <div className={input.hot}>
                        {
                            hotList.map((item, index) => {
                                return <div key={index} className={input.hot_item}>{item}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    cancelShowIput() {
        this.props.showIput()
    }
}

export default Input