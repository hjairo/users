import * as React from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Center,
  Container,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text
} from '@chakra-ui/react';
import GroupIcon from '../Components/GroupIcon';
import UserIcon from '../Components/UserIcon'

function App() {
  return (
  <>
    <Container>
      <Box bg="#fff" boxShadow="md" h="64px">
        <Center>
          <GroupIcon />{" "}
          <Flex h={16} alignItems={'center'} color="#4a4a4a" fontSize="18px">
            USERS
          </Flex>
        </Center>
      </Box>
      <Stack bg={useColorModeValue('gray.100', 'gray.900')} spacing="16px" alignItems={'center'}>
            <Accordion allowToggle bg="#fff" boxShadow="md" w="95%" m="16px">
              <AccordionItem>
                  <AccordionButton h="80px">
                    <UserIcon />
                    <Box flex="1" textAlign="left">
                      <Text fontSize="12px" fontWeight="semibold" color="#4a4a4a">Alexander the Great</Text>
                      <Text fontSize="10px" color="#4a4a4a">Administrator</Text>
                      <Text fontSize="10px" color="#7e7e7e">email@email.com</Text>
                    </Box>
                    <AccordionIcon color="#7e7e7e" />
                  </AccordionButton>
                  <AccordionPanel pb={4} h="190px" ml="30px">
                    <Stack flex="1" textAlign="left" pl="10px">
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Address
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                          1234 Not a Fake Street, Dallas, TX 75201
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Phone
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                          (555) 867-5309
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Created At
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                        1/1/70 12:01 AM
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="10px" fontWeight="semibold" color="#4a4a4a">
                          Last Logged In
                        </Text>
                        <Text fontSize="10px" color="#7e7e7e">
                          1/2/70 12:02 AM
                        </Text>
                      </Box>
                    </Stack>
                  </AccordionPanel>
              </AccordionItem>
            </Accordion>
      </Stack>
    </Container>
  </>
  );
}

export default App;