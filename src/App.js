import React ,{ Component ,Fragment}from 'react';
import GoodsList from './GoodsList';
import CartList from './CartList';
import OrderForm from './OrderForm';
import './app.css';
class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        isList:true,
        showCartStatus:false,
        cartList:[],
        orderList:[]
      }
      this.addItem = this.addItem.bind(this);
      this.showCart = this.showCart.bind(this);
      this.reSet = this.reSet.bind(this);
      this.payMoney = this.payMoney.bind(this);
      this.backHome = this.backHome.bind(this);
    }
    addItem(item,index){
      let { cartList } = this.state;
      cartList.push(item);
      this.setState({
        cartList
      })
    }
    reSet(){
      this.setState({
        cartList:[]
      })
    }
    payMoney(data){
      this.showCart();
      this.reSet();
      this.setState({
        isList :false,
        orderList:[...this.state.orderList,...data]
      })
    }
    showCart(){
      this.setState({
        showCartStatus:!this.state.showCartStatus
      })
    }
    backHome(){
      this.setState({
        isList :true
      })
    }
    render(){
      return(
        <Fragment>
          <header className="header">
            <span>react 商城</span>
            <span className="cart-num-button" onClick={this.showCart}>购物车({this.state.cartList.length})</span>
            <span className="cart-num-button" style={{marginRight:30}} onClick={()=>this.setState({isList:false})}>订单</span>
          </header>
          {this.state.isList?
            <GoodsList addItem={this.addItem}/>
            :
            <OrderForm backHome={this.backHome} orderList ={this.state.orderList}/>
          }
          {this.state.showCartStatus?
            <CartList 
              data={this.state.cartList}
              close={this.showCart}
              reSet={this.reSet}
              payMoney={this.payMoney}
            />
            :''}
        </Fragment> 
      )
  }
}

export default App;