import React from 'react';
import { Button } from 'reactstrap';

const DicURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

type AcceptedProps = {
    word: string,
}

type SetVariables = {
    synonyms: Array<any>,
}

class SynonymFetch extends React.Component<AcceptedProps, SetVariables>{ //eventToUpdate
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            synonyms: []
        }
    }    

    fetchEvents = () => {
        fetch(`${DicURL}${this.props.word}`)
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
                <Button onClick={this.fetchEvents}>Fetch Data</Button>
            </div>
        )
    }
}


export default SynonymFetch;