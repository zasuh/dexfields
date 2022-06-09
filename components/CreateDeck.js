import React, { useState } from 'react';
import axios from 'axios';
import { SCRYFALL_ENDPOINT } from '../utils/externalApi';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {
  Box,
  useDisclosure,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Image,
} from '@chakra-ui/react';
import { SearchIcon, AddIcon } from '@chakra-ui/icons';

const searchAPI = (value) =>
  axios.get(
    `${SCRYFALL_ENDPOINT}/cards/search?format=json&q=${encodeURIComponent(
      value + ' IS:commander'
    )}`
  );

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

const CreateDeck = () => {
  const [data, setData] = useState([]);
  const [commander, setCommander] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const search = async (e) => {
    const {
      data: { data: cards },
    } = await searchAPIDebounced(e.target.value);
    setData(cards);
  };

  const selected = (e) => {
    const commander = data.find((card) => card.id === e.target.value);
    setCommander(commander);
  };

  return (
    <>
      <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="green">
        Create New Deck
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create A New Deck</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup mb={3}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input placeholder="Search for commander" onChange={search} />
            </InputGroup>

            {data.length > 0 && (
              <Select
                placeholder="Select a commander"
                onChange={selected}
                mb={5}
              >
                {data.map((card) => (
                  <option key={card.id} value={card.id}>
                    {card.name}
                  </option>
                ))}
              </Select>
            )}

            {commander && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image src={commander.image_uris.normal} alt="Magic card" />
              </div>
            )}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="outline" colorScheme="blue">
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateDeck;
