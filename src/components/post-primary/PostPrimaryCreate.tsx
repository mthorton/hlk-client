import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';

type AcceptedProps = {
    token: string,
    fetchEvents(): any
}

type SetValues = {
    date: string,
    genre: string,
    post: string,
    thoughts: string,
    modal: boolean,
    genreDropdown: boolean,
}

class PostPrimaryCreate extends React.Component<AcceptedProps, SetValues>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            date: "",
            genre: "",
            post: "",
            thoughts: "",
            modal: false,
            genreDropdown: false
        }
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //fetch(`http://localhost:3000/postprimary/create`, {  
        fetch(`${APIURL}/postprimary/create`, {  
            method: 'POST',
            body: JSON.stringify({postprimary: {date: this.state.date, genre: this.state.genre, post: this.state.post, thoughts: this.state.thoughts}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            this.setState({
                date: '',
                genre: '',
                post: '',
                thoughts: '',
            })
            // setDate('');
            // setTitle('');
            // setLocation('');
            // setDescription('');
            this.props.fetchEvents();
        })
    };

    toggleGenreOn = () => this.setState({genreDropdown: true});
    toggleGenreOff = () => this.setState({genreDropdown: false});

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

                <Button color="success" style={{ fontSize:"42px"}} onClick={this.toggleOpen}>Create a Post</Button>
                <Modal isOpen={this.state.modal} className="primary-create-modal">

                    <ModalHeader><h1 className="pp-modal-title">Create a Post</h1></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="dateString">Date: </Label>
                                <Input name="dateString" type="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="title">Genre: </Label>

                                <FormGroup tag="fieldset">
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={(e) => this.setState({ genre: "Action"})} />{' '}
                                        Action
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={(e) => this.setState({ genre: "Fantasy"})} />{' '}
                                        Fantasy
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={(e) => this.setState({ genre: "Horror"})} />{' '}
                                        Horror
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                    <Label check>
                                        <Input type="radio" name="radio1" onChange={(e) => this.setState({ genre: "Romance"})} />{' '}
                                        Romance
                                    </Label>
                                    </FormGroup>
                                </FormGroup>

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="location">Post: </Label>
                                <Input className="primary-create-post" name="location" type="textarea" value={this.state.post} onChange={(e) => this.setState({ post: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="description">Thoughts: </Label>
                                <Input name="description" type="textarea" value={this.state.thoughts} onChange={(e) => this.setState({ thoughts: e.target.value})}/>
                            </FormGroup>
                            <Row>
                                <Col>
                                    <Button type="submit" onClick={this.toggleClose}>Create</Button>
                                </Col>
                                <Col xs="9"/>
                                <Col>
                                    <Button onClick={this.toggleClose}>Cancel</Button>
                                </Col>
                            </Row>
                        </Form>  
                    </ModalBody> 
                </Modal>
            </>
        );
    }
    
};

export default PostPrimaryCreate;