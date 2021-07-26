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
import GroupIcon from '../Components/GroupIcon';
import UserIcon from '../Components/UserIcon';
import data from '../content/users.json';

function App() {
  return (
  <>
  <ChakraProvider>
    <Box bg="#f1f5f6" h="100vh">
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
            {data.map(users => 
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
                          {users.phone}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Created At
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                        {users.createdAt}
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Last Logged In
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                          {users.lastLoggedIn}
                        </Text>
                      </Box>
                    </Stack>
                  </AccordionPanel>
              </AccordionItem>
            </Accordion>
            )}
      </Stack>
    </Container>
    </Box>
    </ChakraProvider>
  </>
  );
}

export default App;