import React from 'react';
import styled from '@emotion/styled';
import { useTheme, useColorMode } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { SearchIcon, BellIcon, AddIcon, MoonIcon } from '@chakra-ui/icons';
import { FaJenkins } from 'react-icons/fa';

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
  const { toggleColorMode } = useColorMode();
  return (
    <Wrapper colors={theme.colors}>
      <LeftWrapper>
        <Text fontSize="2xl">DEXFIELDS</Text>
        <LeftLinksWrapper>
          {LINKS.slice(0, 3).map((link) => (
            <Text fontSize="md" key={link.label}>
              {link.label}
            </Text>
          ))}
          <Separator />
          {LINKS.slice(3, 6).map((link) => (
            <Text fontSize="md" key={link.label}>
              {link.label}
            </Text>
          ))}
        </LeftLinksWrapper>
      </LeftWrapper>
      <RightWrapper>
        <AddIcon />
        <BellIcon />
        <FaJenkins />
        <SearchIcon />
        <MoonIcon onClick={toggleColorMode} />
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ colors }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '100%',
  backgroundColor: colors.blue[900],
  boxShadow: '0 4px 2px -2px gray',
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

const Separator = styled.div({
  height: '100%',
  width: 1,
  backgroundColor: 'white',
});
