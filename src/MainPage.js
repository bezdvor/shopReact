import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import CardPanel from './CardPanel';
import FilterPrice from './FilterPrice';
import CategoryFilter from './CategoryFilter';
import './App.css'

class MainPage extends React.Component {
    render(){
        return(
            <div className="row">
                <aside className="col-3 AsideMain p-2">
                    <CategoryFilter />
                    <FilterPrice />
                </aside>
                <main className="col-9">
                    <CardPanel />
                </main>
            </div>
        )
    }
}
export default MainPage;