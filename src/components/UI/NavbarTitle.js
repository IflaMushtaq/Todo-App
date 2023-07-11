import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function NavbarTitle(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='bg-dark px-5'{...args}>
        <NavbarBrand className='text-white'>TODO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <NavbarText className='text-white'>WELCOME, IFLA!</NavbarText>
      </Navbar>
    </div>
  );
}

export default NavbarTitle;