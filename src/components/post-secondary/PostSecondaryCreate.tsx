import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../helpers/environment';

type AcceptedProps = {
    token: string,
    fetchEvents(): any, //(arg: string): void
    event: any
}

type SetValues = {
    date: string,
    genre: string,
    post: string,
    thoughts: string,
    modal: boolean,
    secondaryEvents: Array<any>,
    postprimaryId: number
}

class PostSecondaryCreate extends React.Component<AcceptedProps, SetValues>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            date: "",
            genre: "",
            post: "",
            thoughts: "",
            modal: false,
            secondaryEvents: [],
            postprimaryId: this.props.event.id
        }
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //fetch(`http://localhost:3000/postsecondary/create`, {  
        fetch(`${APIURL}/postsecondary/create`, {
            method: 'POST',
            body: JSON.stringify({postsecondary: {date: this.state.date, post: this.state.post, thoughts: this.state.thoughts, postprimaryId: this.state.postprimaryId}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
        .then((logData) => {
            this.setState({
                date: '',
                genre: '',
                post: '',
                thoughts: '',
            })
            this.props.fetchEvents()
        })
    };

    onClick: any = () => this.handleSubmit

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

    render(){
        return(
            <>

                <Button onClick={this.toggleOpen}>Create Secondary Post</Button>
                <Modal isOpen={this.state.modal}>

                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="dateString">Date: </Label>
                                <Input name="dateString" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="location">Post: </Label>
                                <Input name="location" value={this.state.post} onChange={(e) => this.setState({ post: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Thoughts: </Label>
                                <Input name="description" value={this.state.thoughts} onChange={(e) => this.setState({ thoughts: e.target.value})}/>
                            </FormGroup>
                            <Button type="submit" onClick={this.toggleClose}>Add Event</Button>
                        </Form>  
                    </ModalBody> 
                </Modal>
            </>
        );
    }
    
};

export default PostSecondaryCreate;