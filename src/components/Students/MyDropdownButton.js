import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Well } from 'react-bootstrap'

function renderDropdown(assignment, i) {
  return (
    <DropdownItem className="dropdown-item">{assignment}</DropdownItem>
  );
}

export default class MyDropdownButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.content = this.props.content;
    this.list = this.props.list;
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="dropdown-toggle" caret>
          {this.content}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {this.list.map(renderDropdown)}
        </DropdownMenu>
      </ButtonDropdown>
      </div>

    );
  }
}