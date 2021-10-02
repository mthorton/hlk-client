import React from 'react';
import { GiFishingHook } from 'react-icons/gi'

class Footer extends React.Component{

render(){
    return(
        <div className="footer">
            <GiFishingHook size="4em" color="white"/>
            <h4>Hook, Line, and Keeper</h4>
        </div>
    )
}
}

export default Footer;