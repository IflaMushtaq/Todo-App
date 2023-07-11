import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
} from 'reactstrap';

function NavbarTitle() {
  return (
    <div>
      <Navbar className='bg-dark px-5'>
        <NavbarBrand className='text-white'>TODO</NavbarBrand>
        <NavbarText className='text-white'>WELCOME, IFLA!</NavbarText>
      </Navbar>
    </div>
  );
}

export default NavbarTitle;