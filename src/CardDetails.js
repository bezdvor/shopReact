import React from 'react';
import {connect} from 'react-redux';
import './CasrDetails.css'

class CardDetails extends React.Component {
    render(){
        return(
           <div className="container">
               {this.props.datastore.map((item, index)=>{
                   if (+this.props.match.params.id === item.id){
                       return (
                           <div className="CardDetail" key={item.id}>
                               <div>
                                   <img className="img-fluid" src={item.img} alt={item.title}/>
                               </div>
                               <h1 className="title">{item.title}</h1>
                               <div className="p-3">
                                   <p>{item.description}</p>
                               </div>

                           </div>
                       )
                   }
                   else {return(<div className="container" key={item.id}></div>)}
               })}
           </div>
        )
    }
}
const mapStateToProps = (state) => ({datastore: state.mygood});
export default connect(mapStateToProps)(CardDetails);

