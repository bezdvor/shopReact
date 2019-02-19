import React from 'react';
import {connect} from 'react-redux';
import Cardgood from './Cardgood';

const mapStateToProps = (state) => ({items: state.mygood, img:state.img, cat: state.category, price:state.price, order:state.order});

class CardPanel extends React.Component{
    get sortData() {
        let x = [...this.props.items];
        if (this.props.order === 'asc') {
            x.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (this.props.order === 'desc') {
            x.sort((a, b) => {
                return -a.price + b.price;
            })
        } else{
            x = [...this.props.items];
        }
        return x;
    }
    renderCatalog = () => {
        if(this.props.cat) {
            return this.sortData.filter(card => {
                return (card.categoryId === this.props.cat && card.price >= this.props.price.min && card.price <= this.props.price.max)
            }).map(item => {
                return (
                   <Cardgood datamap={item}/>
                )
            })
        } else {
            return this.sortData.filter(card => {
                return (card.price >= this.props.price.min && card.price <= this.props.price.max)
            }).map(item => {
                return (
                       <Cardgood datamap={item}/>
                )
            })
        }
    };
    render(){
        return(
                <section className="cardSection">
                    {this.renderCatalog()}
                </section>
        )
    }
}

export default connect(mapStateToProps)(CardPanel);