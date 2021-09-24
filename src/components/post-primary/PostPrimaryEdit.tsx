import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

type AcceptedProps = {
    token: string,
    // updateActive: boolean,
    eventToUpdate: any,
    updateOff():any, //(arg: string): void
    fetchEvents(): any, //(arg: string): void
}

type SetValues = {
    editDate: string,
    editGenre: string,
    editPost: string,
    editThoughts: string,
    modal: boolean
}

class PostPrimaryEdit extends React.Component<AcceptedProps, SetValues>{
    
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            editDate: this.props.eventToUpdate.date,
            editGenre: this.props.eventToUpdate.genre,
            editPost: this.props.eventToUpdate.post,
            editThoughts: this.props.eventToUpdate.thoughts,
            modal: false
        }
    }
    

    eventUpdate = (event: { preventDefault: () => void; }) => {  // Look into this more // changed 2nd event to index. (event, index)
        event.preventDefault();
        fetch(`http://localhost:3000/postprimary/update/${this.props.eventToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({postprimary: {date: this.state.editDate, genre: this.state.editGenre, post: this.state.editPost, thoughts: this.state.editThoughts}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': props.token
                'Authorization' : `Bearer ${this.props.token}`
            })
        }) 
        .then((res) => {
            this.props.fetchEvents();
            this.props.updateOff();
        }) 
        .catch(function(error) {
            console.log('Error with fetch: ' + error.message);
            throw error;
        });
    }

    toggleOpen = () => {
        this.setState({
            modal: true
        })
    }

    toggleClose = () => {
        this.setState({
            modal: false
        })
    }
    
    // onClick: any = () => this.eventUpdate
    
    render(){
        return(
            <div>
                <Button onClick={this.toggleOpen} > Edit </Button>
                <Modal isOpen={this.state.modal}>

                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.eventUpdate}>
                        <FormGroup>
                            <Label htmlFor="datetime">Edit Date: </Label>
                            <Input type="datetime" value={this.state.editDate} onChange={(e) => this.setState({ editDate: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="genre">Edit Genre: </Label>
                            <Input name="genre" value={this.state.editGenre} onChange={(e) => this.setState({ editGenre: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="post">Edit Post: </Label>
                            <Input name="post" value={this.state.editPost} onChange={(e) => this.setState({ editPost: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="thoughts">Edit Thoughts: </Label>
                            <Input name="thoughts" value={this.state.editThoughts} onChange={(e) => this.setState({ editThoughts: e.target.value})}/>
                        </FormGroup> 
                        <Button type="submit" onClick={this.toggleClose}>Update the Event!</Button>  
                        </Form>    
                    </ModalBody> 
                </Modal>

            </div>

        )
    }
}

export default PostPrimaryEdit;