import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Basket.css'

const mapStateToProps = (state) => ({cartmap: state.dataBasket, stategoods: state.mygood});

class Basket extends Component{
getFullData(){
    console.log(this.props.cartmap);
    let fullArr = [];
    for(const ddd of this.props.cartmap){
        for(const x of this.props.stategoods){
            if(ddd.id === x.id){
                fullArr.push({...ddd, ...x})
            }
        }
    }
    return (fullArr)
}

    state ={isOpen:false}
    changeOpenStatus(){this.setState({isOpen: !this.state.isOpen})}

render(){
    console.log('mygood', this.getFullData());
    return(
        <div className="container-fluid">
            {this.getFullData().map(item=> {
                return(
                    <div className="CardBasket text-center" key={item.id}>
                        <img className="img-fluid" src={item.img} alt="#"/>
                        <h2 className="title">{item.title}</h2>

                        {this.state.isOpen ?
                            <p className="cardText">{item.description}</p> :
                            <p className="cardText">{item.description.slice(0,240)} ...</p>}
                        <h3 className="titleSmall">{item.category}</h3>
                        <div className="title"><span className="small">Цена: </span>{item.price}<span className="small"> грн.</span></div>
                        <div className="title"><span className="small">Количество: </span>{item.count}</div>
                        <div className="btn-group">
                            <button className="btn btnMore" onClick={this.changeOpenStatus.bind(this)}>Подробнее</button>
                            <button className="btn btnOform">Оформить заказ</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}}

export default connect(mapStateToProps)(Basket);
