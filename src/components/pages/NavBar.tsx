import React from 'react';
import {Link} from 'react-router-dom';
// import './NavBar.css';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem,
    Button,
    Nav,
} from 'reactstrap';

type AcceptedProps = {
    // sessionToken: string;
    clickLogout(arg: string): void;

}

type SetValues = {
    newIsOpen: boolean,
    isOpen: boolean
}

class NavBar extends React.Component<AcceptedProps, SetValues>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            isOpen: false,
            newIsOpen: true
        }
    }

    //const [isOpen, setIsOpen] = useState(false);

    toggle = () => {
        let newIsOpen = !this.state.isOpen;
        //setIsOpen(newIsOpen);
        this.setState({
            isOpen: newIsOpen
        })
    }

    onClick: any = () => this.props.clickLogout

    render(){
        return(
            <Navbar color="faded" light expand="md" className='navbar'>
                {/* <NavbarBrand href="/">Meet Me Under the Moon</NavbarBrand> */}
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml" navbar>
                        <NavItem className='nav-links'>
                            <ul >
                                <li><Link to='/landing'>Home</Link></li>
                                <li><Link to='/feed'>Feed</Link></li>
                                <li><Link to='/profile'>Profile</Link></li>
                            </ul>
                        </NavItem>
                <NavbarBrand className='nav-title' href="/"><h1>Hook, Line, and Keeper</h1></NavbarBrand>
                        <NavItem>
                            {/* <Switch>
                             <Route exact path='/eventindex'><EventIndex /></Route>
                             <Route exact path='/createevent'><CreateEvent /></Route>
                             <Route exact path='/profile'><Profile /></Route>
                         </Switch> */}
                        </NavItem>
                        <NavItem>
                            <Button className='nav-button' onClick={this.onClick} href='/'>Logout</Button>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
    
        );
    }
    }
    

export default NavBar;