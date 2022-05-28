import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { FaPlus, FaRegBell, FaSearch, FaJenkins } from 'react-icons/fa';

const LINKS = [
  {
    label: 'Home',
  },
  {
    label: 'Explore',
  },
  {
    label: 'Guides',
  },
  {
    label: 'Your Decks',
  },
  {
    label: 'Collection',
  },
  {
    label: 'Wish List',
  },
];

export default function Navbar() {
  const theme = useTheme();
  return (
    <Wrapper colors={theme.colors}>
      <LeftWrapper>
        <Title>DEXFIELDS</Title>
        <LeftLinksWrapper>
          {LINKS.slice(0, 3).map((link) => (
            <div key={link.label}>{link.label}</div>
          ))}
          <Separator />
          {LINKS.slice(3, 6).map((link) => (
            <div key={link.label}>{link.label}</div>
          ))}
        </LeftLinksWrapper>
      </LeftWrapper>
      <RightWrapper>
        <FaPlus />
        <FaRegBell />
        <FaJenkins />
        <FaSearch />
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ colors }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '100%',
  backgroundColor: colors.sapphire,
  color: colors.white,
  padding: '20px 30px',
}));

const LeftWrapper = styled.div({
  width: 600,
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

const RightWrapper = styled.div({
  width: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
});

const LeftLinksWrapper = styled.div({
  height: 15,
  width: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Title = styled.h1({
  display: 'block',
  fontSize: 24,
  textDecoration: 'underline',
});

const Separator = styled.div({
  height: '100%',
  width: 1,
  backgroundColor: 'white',
});
