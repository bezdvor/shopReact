import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

class Cardgood extends React.Component {
    render(){
        return(
<div>
    {this.props.mycard.map((item)=>{
        <Card>
            <CardImg top width="100%" src={this.props.mycard.img} alt="#" />
            <CardBody>
                <CardTitle>{this.props.mycard.title}</CardTitle>
                <CardText>{this.props.mycard.description}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    })}
</div>
        )
    }
}
export default Cardgood;

