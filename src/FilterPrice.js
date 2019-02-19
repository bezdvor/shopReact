import React from 'react';
import {connect} from 'react-redux';
import './App.css'
import {bindActionCreators} from 'redux';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changePrice: (payload)=> ({type: 'CHANGE_PRICE', payload})},dispatch))
const mapStateToProps = (state) => ({arr: state.mygood})
class FilterPrice extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        if(+event.target.children[0].value > +event.target.children[1].value){
            console.log('Неправильно')
        } else {
            this.props.changePrice({min: parseInt(event.target.children[0].value, 10),
                max: parseInt(event.target.children[1].value, 10)})
            console.log('min',event.target.children[0].value)
            console.log('max',event.target.children[1].value)
        }
    }
    minMax() {
        let min = this.props.arr[0].price;
        let max = min;
        for(const item of this.props.arr){
            if (item.price < min) min = item.price;
            if (item.price > max) max = item.price;
        }
        return {min, max};
    }
    handleRange(event) {
        event.target.parentElement.firstElementChild.value = event.target.getAttribute('min');
        event.target.parentElement.children[1].value = event.target.value;
    }
    handleInput(event) {
        if(event.target.value !== '' && +event.target.value >= +event.target.nextElementSibling.getAttribute('min') && +event.target.value <= +event.target.nextElementSibling.getAttribute('max')){
            event.target.nextElementSibling.value = event.target.value;
        }
    }
    render() {
        return (
            <form className="form-group p-3 AsideMain" onSubmit = {this.handleSubmit.bind(this)}>
                <input  className="p-1"  type="text"/>
                <input  className="p-1" type="text"
                    onChange = {this.handleInput.bind(this)}
                />
                <hr/>
                <input className="p-1 d-inline-block"
                    type= "range"
                    min = {this.minMax().min}
                    max = {this.minMax().max}
                    onChange = {this.handleRange.bind(this)}/>
                <button className="offset-1 btn btn-toolbar d-inline-block">Ok</button>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPrice);