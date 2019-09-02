import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Flex } from 'styled';

import BG from './BG';
import Logo from './Logo';
import Nav from './Nav';

const Header = ({ siteTitle }) => (
  <header>
    <BG width="100%" style={{ position: 'absolute' }} />
    <Flex align="center" padding="0 10%" width="100%" height="93px" justify="space-between">
      <Logo />
      <Nav />
    </Flex>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
