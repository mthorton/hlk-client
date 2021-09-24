import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

type AcceptedProps = {
    token: string,
    fetchEvents(): any
}

type SetValues = {
    date: string,
    genre: string,
    post: string,
    thoughts: string,
    modal: boolean
}

class PostPrimaryCreate extends React.Component<AcceptedProps, SetValues>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            date: "",
            genre: "",
            post: "",
            thoughts: "",
            modal: false
        }
    }
    // const [date, setDate] = useState('');
    // const [title, setTitle] = useState('');
    // const [location, setLocation] = useState('');
    // const [description, setDescription] = useState('');

    // useEffect(() => {
    //     handleSubmit();
    // }, []);

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        fetch(`http://localhost:3000/postprimary/create`, {  
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

                <Button onClick={this.toggleOpen}>Create Post</Button>
                <Modal isOpen={this.state.modal}>

                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="dateString">Date: </Label>
                                <Input name="dateString" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="title">Genre: </Label>
                                <Input name="title" value={this.state.genre} onChange={(e) => this.setState({ genre: e.target.value})}/>
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

                {/* <h3 className='create-header'>Create an Event</h3>
                <Form className='create-form' onSubmit={this.onClick}>
                    <FormGroup>
                        <Label htmlFor="dateString">Date: </Label>
                        <Input name="dateString" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="title">Genre: </Label>
                        <Input name="title" value={this.state.genre} onChange={(e) => this.setState({ genre: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="location">Post: </Label>
                        <Input name="location" value={this.state.post} onChange={(e) => this.setState({ post: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Thoughts: </Label>
                        <Input name="description" value={this.state.thoughts} onChange={(e) => this.setState({ thoughts: e.target.value})}/>
                    </FormGroup>
                    <Button className='sub-button' type="submit">Add Event</Button>
                </Form> */}
            </>
        );
    }
    
};

export default PostPrimaryCreate;