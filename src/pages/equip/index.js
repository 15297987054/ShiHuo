import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'
import equip from './equip.module.css'
import { connect } from 'react-redux'
import {SELECT_ALL_ACTION,SELECT_ONE_ACTION,DELETE_ONE_ACTION,DELETE_ALL_ACTION} from '@actions/shopcar'
const CheckboxItem = Checkbox.CheckboxItem;
class Equip extends Component {
    render() {
        let { list } = this.props
        console.log(list)
        return (
            <div>
                <div className={equip.top}>
                    <CheckboxItem onChange={this.props.selectAll.bind(this)}>
                        <div className={equip.top_left}>全选</div>
                    </CheckboxItem>
                    <div onClick={this.props.deleteAll.bind(this)} className={equip.top_right}>全部删除</div>
                </div>
                {
                    list.length > 0 ? list.map(i => (
                        <CheckboxItem key={i.item_id} checked={i.checked} onChange={this.props.selectOne.bind(this,i.item_id)}>
                            {
                                <div className={equip.item}>
                                    <img src={i.img} className={equip.item_img} alt="" />
                                    <div className={equip.item_right}>
                                        <div className={equip.item_right_title}>{i.title}</div>
                                        <div className={equip.item_right_intro}>{i.intro}</div>
                                        <div className={equip.item_right_price}>
                                            <span>￥{i.price}</span>
                                            <span onClick={this.props.deleteOne.bind(this,i.item_id)} id={equip.icon_yuanX} style={{ fontSize: '12px' }} className="iconfont icon-yuanX">  删除</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </CheckboxItem>
                    )) : <div className={equip.null}>
                            购物车为空，<span onClick={this.toAddGoods.bind(this)}>去添加商品</span>
                        </div>
                }
            </div>
        );
    }
    toAddGoods() {
        this.props.history.push('/home')
    }
}
const mapDispatchToProps=(dispatch)=>({
    selectAll(){
       dispatch(SELECT_ALL_ACTION())
    },
    selectOne(val){
       dispatch(SELECT_ONE_ACTION(val))
    },
    deleteOne(val){
        dispatch(DELETE_ONE_ACTION(val))
    },
    deleteAll(){
        dispatch(DELETE_ALL_ACTION())
    }
})
const mapStateToProps = (state) => ({
    list: state.add.list
})
export default connect(mapStateToProps,mapDispatchToProps)(Equip)