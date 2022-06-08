import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Footer = () => {
  return (
    <Wrapper>
      <div>Left</div>
      <div>Right</div>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '100%',
  backgroundColor: 'white',
  boxShadow: ' 0px -2px 4px -2px gray',
  color: 'black',
  padding: '20px 30px',
});

export default Footer;
