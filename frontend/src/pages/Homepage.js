import React, { useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) {
      <Navigate to='/chats' replace={true} />;
    }
  }, []);

  return (
    <Container maxWidth='xl' centerContent>
      <Box
        w='100%'
        d='flex'
        justifyContent='center'
        bg='white'
        p={3}
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'>
        <Text fontSize='4xl' fontFamily='work sans' color='black'>
          <Center>Talk-A-Tive</Center>
        </Text>
      </Box>
      <Box
        bg='white'
        w='100%'
        p={4}
        borderRadius='lg'
        borderWidth='1px'
        color='black'>
        <Tabs variant='soft-rounded'>
          <TabList mb='1em'>
            <Tab width='50%'>Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
