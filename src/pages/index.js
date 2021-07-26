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

// Formats phone numbers according to the assessment's requirements
let formatPhoneNumber = (phone) => {
  //Filter only numbers from the input
  let cleaned = ('' + phone).replace(/\D/g, ''); 
  //Check if the input is of correct length using custom regex
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
    <Box bg="#f1f5f6" h="100vh" overflow="auto">
    <Container>
      <Box bg="#fff" boxShadow="md" h="64px" mb="16px">
        <Center>
          <GroupIcon />{" "}
          <Flex h={16} alignItems={'center'} color="#4a4a4a" fontSize="18px">
            USERS
          </Flex>
        </Center>
      </Box>
      <Stack alignItems={'center'} spacing="16px" pl="12px" pr="12px">
            {/* Maps data from the provided users.json file to their respective places on the user's card */}
            {data.map(users => {
            // parses timestamp to be used for formatting.
            let createdAt = ZonedDateTime.parse(users.createdAt);
            let loggedAt = ZonedDateTime.parse(users.lastLoggedIn);
            return (
            <Accordion allowToggle bg="#fff" boxShadow="md" w="full">
              <AccordionItem>
                  <AccordionButton h="80px">
                    {(users.role === "Administrator") ? <UserIcon 
                      fill="#2081c3" 
                      /> : 
                      (users.role === "User") ? <UserIcon
                      fill="#68aaab"
                     /> :
                     (users.role === "Viewer") ? <UserIcon 
                      fill="#7e7e7e"
                     /> : ""}
                    <Box flex="1" textAlign="left">
                      <Text fontSize="12px" fontWeight="semibold" color="#4a4a4a">{users.firstName + " " + users.lastName}</Text>
                      <Text fontSize="10px" color="#4a4a4a">{users.role}</Text>
                      <Text fontSize="10px" color="#7e7e7e">{users.email}</Text>
                    </Box>
                    <AccordionIcon color="#7e7e7e" />
                  </AccordionButton>
                  <AccordionPanel pb={4} h="190px" ml="53px">
                    <Stack flex="1" textAlign="left" pl="10px" spacing="12px">
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
                        {/* Formats dates according to assessment's requirements */}
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
                        {/* Formats dates according to assessment's requirements */}
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