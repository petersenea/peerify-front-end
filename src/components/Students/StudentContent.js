import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Well } from 'react-bootstrap'
import MyDropdownButton from './MyDropdownButton';
import Flexbox from 'flexbox-react';

const ASSIGNMENTS = ['Assignment 1', 'Assignment 2', 'Assignment 3','Assignment 4'];
const PEERREVIEWS = ['Peer Review 1', 'Peer Review 2', 'Peer Review 3', 'Peer Review 4'];


export default class StudentContent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.name = this.props.name;
    
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
        <Well className="student-content">
        <strong>Name:</strong> {this.name}
        <br></br>
        <strong>Bucket:</strong> Definitely Harsh
        <br></br>
        <strong>Incomplete Peer Reviews:</strong> all of them :/
        <br></br>
        <Flexbox className="flex-dropdown" maxWidth="300px" flexWrap="wrap"  >
            <MyDropdownButton content = "Assignments" list = {ASSIGNMENTS}/>
            <MyDropdownButton content = "Peer Review" list ={PEERREVIEWS}/>
        </Flexbox>

    </Well>

    );
  }
}