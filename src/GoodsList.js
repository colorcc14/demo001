import React ,{ Component }from 'react';
import { goodListData } from './mock_data/mock_data';
import  GoodsItem  from './GoodsItem';

class GoodsList extends Component{
    constructor(props){
        super(props);
        this.state = {
          goodListData:goodListData
        }
    }
    render(){
        return(
            <div className="list-container">
              {this.state.goodListData.map((item,index)=>{
                return <GoodsItem data = {item} key={index} addItem={()=>this.props.addItem(item,index)}/>
              })}
            </div> 
        )
    }
}

export default GoodsList;