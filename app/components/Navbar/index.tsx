'use client';

import React from 'react';
import Container from '../Container';
import Logo from './logo';
import NavLinks from './navLinks';
import Search from './search';

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center">
              <Logo />
              <NavLinks />
            </div>
            <div>
              <Search />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
