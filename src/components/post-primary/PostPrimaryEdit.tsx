import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

type AcceptedProps = {
    token: string,
    updateActive: boolean,
    eventToUpdate: object,
    updateOff(arg: string): void,
    fetchEvents(arg: string): void,
}

class PostPrimaryEdit extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            editDate: this.props.eventToUpdate.date,
            editGenre: "",
            editPost: "",
            editThoughts: ""
        }
    }
    // const [editDate, setEditDate] = useState(props.eventToUpdate.date);
    // const [editTitle, setEditTitle] = useState(props.eventToUpdate.title);
    // const [editLocation, setEditLocation] = useState(props.eventToUpdate.location);
    // const [editDescription, setEditDescription] = useState(props.eventToUpdate.description);

    eventUpdate = (event, index) => {  // Look into this more // changed 2nd event to index.
        event.preventDefault();
        fetch(`http://localhost:3000/log/update/${this.props.eventToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {date: this.state.editDate, genre: editDescription, post: editDate, thoughts: editLocation}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                //'Authorization': props.token
                'Authorization' : `Bearer ${this.props.token}`
            })
        }) .then((res) => {
            this.props.fetchEvents;
            this.props.updateOff;
        }) .catch(function(error) {
            console.log('Error with fetch: ' + error.message);
            throw error;
        });
    }
}

    return(
        <Modal isOpen={true}>
            <ModalHeader>Update an Event</ModalHeader>
            <ModalBody>
                <Form onSubmit={eventUpdate}>
                <FormGroup>
                    <Label htmlFor="datetime">Edit Date: </Label>
                    <Input type="datetime" value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="title">Edit Title: </Label>
                    <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location">Edit Location: </Label>
                    <Input name="location" value={editLocation} onChange={(e) => setEditLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Edit Description: </Label>
                    <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                </FormGroup> 
                <Button type="submit">Update the Event!</Button>  
                </Form>    
            </ModalBody> 
        </Modal>
    )
}

export default PostPrimaryEdit;