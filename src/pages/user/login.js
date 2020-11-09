import React, { Component } from 'react'
import { InputItem, Toast } from 'antd-mobile'
import login from './login.module.css'
import { Button } from 'antd-mobile'
import saveDataToLocal from '../../utils/localstorage'
class Login extends Component{
    state = {
        hasError: false,
        phone: '',
        password:'',
        hasPasswordError:false
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('请输入11位有效手机号码');
        }
      }
      onErrorPasswordClick=()=>{
          if(this.state.hasPasswordError){
              Toast.info('请输入8位有效密码')
          }
      }
      onPasswordChange=(value)=>{
          if(value.replace(/\s/g,'').length!==8){
              this.setState({
                  hasPasswordError:true
              })
          }else{
              this.setState({
                  hasPasswordError:false
              })
          }
          this.setState({
              password:value
          })
      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          phone:value,
        });
      }
      handleLogin(){
          if(!this.state.phone||this.state.hasError){
              Toast.info('请输入11位有效手机号码')
              return
          }
          if(!this.state.password||this.state.hasPasswordError){
              Toast.info('请输入8位有效密码')
              return
          }
          saveDataToLocal.save('phone',this.state.phone).then(res=>{
              if(res.code===0){
                  this.props.history.goBack()
              }
          })
      }
    render(){
        return (
            <div className={login.box}>
                <InputItem
                  type="phone"
                  className={login.input}
                  placeholder="请输入您的手机号码"
                  error={this.state.hasError}
                  onErrorClick={this.onErrorClick}
                  onChange={this.onChange}
                  value={this.state.phone}
                >账号</InputItem>
                <div className={login.divider}></div>
                <InputItem
                  type="password"
                  className={login.input}
                  placeholder="请输入您的密码"
                  error={this.state.hasPasswordError}
                  onErrorClick={this.onErrorPasswordClick}
                  onChange={this.onPasswordChange}
                  value={this.state.password}
                >密码</InputItem>
                <div className={login.btn}>
                <Button type="primary" onClick={this.handleLogin.bind(this)}>登录</Button>
                </div>
            </div>
          );
    }
}

export default Login