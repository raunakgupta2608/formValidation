import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';

function DisplayData() {
    return (
        /* This component is not getting used */
        <div className='displayData'>
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default DisplayData;