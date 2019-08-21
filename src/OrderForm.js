import React ,{ Component }from 'react';

class OrderForm extends Component{
    render(){
      let { orderList } = this.props;
        return(
            <div className="list-container">
              <h4>订单</h4>
              {orderList.map((item)=>{
                return <div className="goods-item-container">
                        <img className="goods-item-photo" src={item.photo} alt=''/>
                        <ul className="goods-item-list">
                          <li>{item.name}</li>
                          < li>
                            {item.price} 
                          </li>
                        </ul>
                       </div> 
              })}
              <div>
                <button onClick={this.props.backHome}>返回主页</button>
              </div>
            </div> 
        )
    }
}

export default OrderForm;