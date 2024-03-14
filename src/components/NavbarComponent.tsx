
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="./index.html">
        <img src="../public/assets/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">React TypeScript</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="../public/assets/developer.jpg" rounded />
          }
        >
          <Dropdown.Header >
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='text-2xl'>
        <Navbar.Link href="#" active className='text-xl'>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>About</Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>Services</Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>Pricing</Navbar.Link>
        <Navbar.Link href="#" className='text-xl'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
