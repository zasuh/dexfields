import React from 'react';
import styled from '@emotion/styled';
import { useTheme, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const theme = useTheme();
  const bg = useColorModeValue(theme.colors.white, theme.colors.gray[800]);
  const color = useColorModeValue(theme.colors.black, theme.colors.white);
  return (
    <Wrapper bg={bg}>
      <div style={{ color }}>Left</div>
      <div style={{ color }}>Right</div>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ bg }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '100%',
  backgroundColor: bg,
  boxShadow: ' 0px -2px 4px -2px gray',
  color: 'black',
  padding: '20px 30px',
}));

export default Footer;
