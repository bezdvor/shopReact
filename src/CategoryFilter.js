import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './CategoryFilter.css'
const mapStateToProps = (state) => ({arr: state.mygood});
const mapDispatchToProps = (dispatch) => (bindActionCreators({
    changeCatagory: (payload)=>({type: 'CHANGE_CATEGORY', payload}),
    changeSort: (payload)=>({type: 'CHANGE_SORT', payload})
}, dispatch));

class CategoryFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValues:[],
        };
    }
    componentDidMount() {
        this.getFilterValues();
    }
    getFilterValues() {
        let x = [];
        for(const item of this.props.arr) {
            if(x.findIndex((el) => el.categoryId === item.categoryId) === -1) {
                x.push(item);
            }
        }
        this.setState({filterValues: [...x]})
    }
    handleButton(index, event) {
        console.log(index);
        this.props.changeCatagory(index);
    }
    handleButtonNull(event) {
        this.props.changeCatagory(null);
        console.log(event.target.getAttribute('categoryId'));
    }
    render() {
        return (
            <div className="p-3 AsideMain">
                <div className="btn-group flex-row align-items-center">
                    <button className="btn btnBuy" onClick = {() => this.props.changeSort('asc')}>По возр.</button>
                    <button className="btn btnBuy" onClick = {() => this.props.changeSort('desc')}>По убыв.</button>
                    <button className="btn btnBuy" onClick = {() => this.props.changeSort('default')}>По умолч.</button>
                </div>

                <hr className="text-white"/>
                <button className="btn btnBuy"
                    style = {{display:'block'}}
                    onClick = {this.handleButtonNull.bind(this)}>All Categories</button>
                {this.state.filterValues.map(filter => {
                    return (
                        <div className="btn-group">
                            <button
                                className="btn btnBuy"
                                style = {{display:'block'}}
                                key = {filter.categoryId}
                                categoryid = {filter.categoryId}
                                onClick = {this.handleButton.bind(this, filter.categoryId)}>{filter.category}</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryFilter);