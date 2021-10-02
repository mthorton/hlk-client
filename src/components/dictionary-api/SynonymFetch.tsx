import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const DicURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

type AcceptedProps = {

}

type SetVariables = {
    synonyms: Array<any>,
    userInput: string,
}

class SynonymFetch extends React.Component<AcceptedProps, SetVariables>{ //eventToUpdate
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            synonyms: [],
            userInput: "",
        }
    }    

    fetchEvents = () => {
        fetch(`${DicURL}${this.state.userInput}`)
        .then((res) => res.json())
        .then((logData) => {
            this.setState({
            synonyms: logData[0].meanings[0].definitions[0].synonyms
        });
        console.log(this.state.synonyms)
        })}     
    
   

    

    render(){
        return(
            <div>
                <h4>Thesaurus</h4>
                <Label htmlFor="findSynonym">Word: </Label>
                <Input name="findSynonym" onChange={(e) => this.setState({ userInput: e.target.value})}/>
                <Button onClick={this.fetchEvents} className="synonym-button">Get Synonyms</Button>
                <div className="synonym-display">{this.state.synonyms.map((s) => {
                    return(
                        <div>
                            <p>{s}</p>
                        </div>
                    )
                })}</div>
            </div>
        )
    }
}


export default SynonymFetch;