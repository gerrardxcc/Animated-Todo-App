import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/gerrard.png')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          {/* <Text fontSize="md" w="full">
            This is a TODO App I learned from Takuya.
          </Text> */}
          
          <Text fontSize="md" w="full">
          Hello! I am a IT graduate developer based in Cairns.
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/gerrardxiong/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            https://www.linkedin.com/in/gerrardxiong/
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen