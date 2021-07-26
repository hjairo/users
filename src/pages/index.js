import * as React from 'react';
import {
  Box,
  Flex,
  Center,
  Container,
  ChakraProvider,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text
} from '@chakra-ui/react';
import "@js-joda/timezone";
import {
  ZonedDateTime,
  DateTimeFormatter,
} from "@js-joda/core";
import { Locale } from "@js-joda/locale_en-us";
import GroupIcon from '../Components/GroupIcon';
import UserIcon from '../Components/UserIcon';
import data from '../content/users.json';

let formatPhoneNumber = (phone) => {
  //Filter only numbers from the input
  let cleaned = ('' + phone).replace(/\D/g, ''); 
  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  };
  return null
};

function App() {
  return (
  <>
  <ChakraProvider>
    <Box bg="#f1f5f6" h="220vh">
    <Container>
      <Box bg="#fff" boxShadow="md" h="64px" mb="16px">
        <Center>
          <GroupIcon />{" "}
          <Flex h={16} alignItems={'center'} color="#4a4a4a" fontSize="18px">
            USERS
          </Flex>
        </Center>
      </Box>
      <Stack alignItems={'center'} spacing="16px">
            {data.map(users => {
            let createdAt = ZonedDateTime.parse(users.createdAt);
            let loggedAt = ZonedDateTime.parse(users.lastLoggedIn);
            return (
            <Accordion allowToggle bg="#fff" boxShadow="md" w="561px">
              <AccordionItem>
                  <AccordionButton h="80px">
                    <UserIcon />
                    <Box flex="1" textAlign="left">
                      <Text fontSize="12px" fontWeight="semibold" color="#4a4a4a">{users.firstName + " " + users.lastName}</Text>
                      <Text fontSize="10px" color="#4a4a4a">{users.role}</Text>
                      <Text fontSize="10px" color="#7e7e7e">{users.email}</Text>
                    </Box>
                    <AccordionIcon color="#7e7e7e" />
                  </AccordionButton>
                  <AccordionPanel pb={4} h="190px" ml="53px">
                    <Stack flex="1" textAlign="left" pl="10px">
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Address
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                        {users.street + ", " + users.city + ", " + users.state + " " + users.zip}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Phone
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                          {formatPhoneNumber(users.phone)}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Created At
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                        {createdAt.format(
                          DateTimeFormatter.ofPattern("M/d/yy [HH:mm] a").withLocale(Locale.US)
                        )}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Last Logged In
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                          {loggedAt.format(
                          DateTimeFormatter.ofPattern("M/d/yy [HH:mm] a").withLocale(Locale.US)
                        )}
                        </Text>
                      </Box>
                    </Stack>
                  </AccordionPanel>
              </AccordionItem>
            </Accordion>
            )})}
      </Stack>
    </Container>
    </Box>
    </ChakraProvider>
  </>
  );
}

export default App;