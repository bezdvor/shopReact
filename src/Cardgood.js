import React from 'react';
import './Cardgood.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({arr: state.mygood, arrBasket: state.dataBasket});
const mapDispatchToProps = (dispatch) => (bindActionCreators({
    addBasket: (id)=>({type: 'BASKET_ADD', id})
}, dispatch));

class Cardgood extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.changeOpenStatus =  this.changeOpenStatus.bind(this);
    }
    state ={isOpen:false}
    changeOpenStatus(){this.setState({isOpen: !this.state.isOpen})}


      handleClick(){this.props.addBasket(this.props.datamap.id)
      }
    btnMore
    render(){
        return(
            <div className="CardDiv">
                <div className="cardInnerDiv">
                    <img className="img-fluid" src={this.props.datamap.img} alt={this.props.datamap.title} />

                    <h2 className="cardTitle"><Link className="linkToDetail" to ={'/page' + this.props.datamap.id}>{this.props.datamap.title}</Link></h2>


                    {this.state.isOpen ?
                        <p className="cardText">{this.props.datamap.description}</p> :
                        <p className="cardText">{this.props.datamap.description.slice(0,240)} ...</p>}
                    <h3 className="cardTitle"><span className="small">Цена:</span> {this.props.datamap.price} <span className="small">грн.</span></h3>
                    <div className="btn-group">
                        <button className="btn btnMore" onClick={this.changeOpenStatus}>Подробнее</button>
                        <button className="btn btnBuy" onClick={this.handleClick} size="lg" block >В корзину</button>
                    </div>

                </div>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cardgood);