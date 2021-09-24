import React from 'react';
import { Table} from 'reactstrap'; 
//import APIURL from '../helpers/environment';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import PostPrimaryEdit from './PostPrimaryEdit';


type AcceptedProps = {
    token: string,
    events: Array<any>, //possible not type string, Array<string>
    editUpdateEvent(arg: Array<string>): void,
    updateOn: any,
    fetchEvents(): any,
    eventToUpdate: any,
    updateOff():any,
};

class EventFeedTable extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
    
        }
    }

    deleteEvent = (event: { id: any; }) => {
        console.log('delete endpoint')
        fetch(`http://localhost:3000/postprimary/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        })
        .then(() => this.props.fetchEvents())
    }

    eventMapper = () => {
        return this.props.events.map((event, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{event.id}</th>
                    <td>{event.date}</td>
                    <td>{event.genre}</td>
                    <td>{event.post}</td>
                    <td>{event.thoughts}</td>
                    <th>
                        <PostPrimaryEdit eventToUpdate={event}
                        updateOff={this.props.updateOff} token={this.props.token} fetchEvents={this.props.fetchEvents}/>
                        <Button onClick={() => {this.deleteEvent(event)}}>Delete</Button>
                    </th>
                </tr>
            )
        })
    }

    // testing(){
    //     console.log(this.props.events)
    //     console.log(this.props.eventToUpdate)
    // }

    // onClick: any = () => this.testing()

    render(){
        return(
            <>
            {/* <Button onClick={this.onClick}>post primary display</Button>
            {console.log(this.props.eventToUpdate + 'post primary display')} */}
            <h3 className='feed-header'>Posts</h3>
            <hr/>
            <Table>
                <thead className='feed-table'>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>Post</th>
                        <th>Thoughts</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.eventMapper()}
                </tbody>
            </Table>
            </>
        )
    }
}

export default EventFeedTable;