import React from 'react';
import { Table} from 'reactstrap'; 
//import APIURL from '../helpers/environment';

type AcceptedProps = {
    token: string,
    events: Array<any>, //possible not type string, Array<string>
    editUpdateEvent(arg: Array<string>): void,
    updateOn(arg: string): void,
    fetchEvents(arg: string): void,

};

class EventFeedTable extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            sessionToken: ""
        }
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
                </tr>
            )
        })
    }

    render(){
        return(
            <>
            <h3 className='feed-header'>Event Feed</h3>
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
                    {this.eventMapper}
                </tbody>
            </Table>
            </>
        )
    }
}

export default EventFeedTable;