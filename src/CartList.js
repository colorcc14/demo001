import React, { Component , Fragment } from 'react';

class CartList extends Component{
  constructor(props){
    super(props);
    this.state={
      num:0,
      data:this.props.data
    }
  }
  componentDidMount(){
    let num = 0;
    this.state.data.map((item) => {
      num += item.price
    })
    this.setState({
      num
    })
  }
  render(){
    let { data } = this.props;
    return(
      <Fragment>
        <div className="cart-list-mask">
          <div className="cart-list-container">
            <span className="cart-list-close" onClick={this.props.close}>X</span>
            <h4>购物车</h4>
            {data.length !==0 ?<ul className="cart-list-ul">
              {data.map((item,index)=>{
                return <li>
                  <img src={item.photo} alt=""/>
                  <span>{item.name}</span>
                  <span>价格：{item.price}</span>
                </li>
              })}
            </ul>:<span>空空如也...</span>}
            {data.length !==0 ?<ul className="cart-bottom">
              <li>总金额：{this.state.num}</li>
              <li>
                <button onClick={this.props.reSet}>清空</button>
                <button onClick={()=>this.props.payMoney(data)}>付款</button>
              </li>
            </ul>:null}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default CartList;