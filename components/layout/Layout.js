import React from 'react';
import styled from '@emotion/styled';

import Footer from './Footer';
import Navbar from './Navbar';
import CreateDeck from '../CreateDeck';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <CreateDeck />
      </Content>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
});

const Content = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default Layout;
