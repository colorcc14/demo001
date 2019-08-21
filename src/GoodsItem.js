import React ,{ Component }from 'react';

class GoodsItem extends Component{
    // constructor(props){
    //     super(props);
    // }
    
    render(){
      // const { value } = this.props;
        return(
            <div className="goods-item-container">
               <img className="goods-item-photo" src={this.props.data.photo} alt=''/>
               <ul className="goods-item-list">
                 <li>{this.props.data.name}</li>
                 <li>
                  {this.props.data.price} 
                  <span className="goods-item-label">库存 {this.props.data.count}</span>
                 </li>
               </ul>
               <div onClick={this.props.addItem} className="add-item-button">添加到购物车</div>
            </div> 
        )
    }
}

export default GoodsItem;