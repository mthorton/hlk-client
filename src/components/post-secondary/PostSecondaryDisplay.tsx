import React from 'react';
import { Table} from 'reactstrap'; 
//import APIURL from '../helpers/environment';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import PostSecondaryCreate from './PostSecondaryCreate';
import PostSecondaryEdit from './PostSecondaryEdit';


type AcceptedProps = {
    token: string,
    eventsSecondary: Array<any>, //possible not type string, Array<string>
    editUpdateSecondaryEvent(arg: Array<string>): void,
    updateOnSecondary: any,
    // fetchSecondaryEvents(): any,
    eventSecondaryToUpdate: any,
    updateOffSecondary():any,
    event: any,
};

type SetVariables = {
    secondaryEvents: Array<any>
}

class PostSecondaryDisplay extends React.Component<AcceptedProps, SetVariables>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            secondaryEvents: []
        }
    }

    fetchSecondaryEvents = () => {
        fetch(`http://localhost:3000/postsecondary/all/${this.props.event.id}`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${this.props.token}`,
        })
    }).then((res) => res.json())
    .then((logData) => {
        this.setState({
            secondaryEvents: logData
    });
    })} 

    componentDidMount(){
        this.fetchSecondaryEvents()
    }

    deleteEvent = (event: { id: any; }) => {
        console.log('delete endpoint')
        fetch(`http://localhost:3000/postsecondary/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        })
        .then(() => this.fetchSecondaryEvents())
    }

    eventMapper = () => {        
        // console.log(this.props.eventSecondaryToUpdate)
        return this.props.eventsSecondary.map((event, index) => {
            if(event.postprimaryId = this.props.event.id){
                return(
                    <>
                        <tr key={index}>
                            <th scope="row">{event.id}</th>
                            <td>{event.date}</td>
                            <td>{event.post}</td>
                            <td>{event.thoughts}</td>
                            <th>
                                <PostSecondaryEdit token={this.props.token} eventSecondaryToUpdate={event} updateOffSecondary={this.props.updateOffSecondary} fetchSecondaryEvents={this.fetchSecondaryEvents}/>
                                <Button onClick={() => { this.deleteEvent(event); } }>Delete</Button>                        
                            </th>
                        </tr>  
                    </>
                )
            }            
        })
    }

    render(){
        return(
            <>
          
            <h3 className='feed-header'></h3>
            <hr/>
            <Table>
                <thead className='feed-table'>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
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

export default PostSecondaryDisplay;