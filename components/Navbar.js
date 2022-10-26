import React from 'react'
import { Box, Flex, Spacer, ButtonGroup, Button, Heading, Text, Image, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { BiSearchAlt } from "react-icons/bi";
import { Search2Icon } from '@chakra-ui/icons'
function Navbar() {
  return (
    <Flex p="2" align={"center"} h="70px"  px="4" justify={"space-between"}
    style={{boxShadow:" -1px 0px 20px 0px rgba(99,93,255,0.2)"}}
    >

{/* 1st component */}
<Flex align={"center"} minW="215px"  justify={"space-between"}>
      <Flex h={"20px"} w="24px" direction={"column"} justifyContent="space-between" >
        <Box h="5px" bg="gray.400" borderRadius={"8px"}></Box>
        <Box h="4px" bg="gray.400" borderRadius={"8px"}></Box>
        <Box h="5px" bg="gray.400" borderRadius={"8px"}></Box>
      </Flex>


      <Box h="30px">
        <Image
          h="100%"
          src='images/logo-high.png' alt='logoImage'>
        </Image>
      </Box>
      </Flex>
{/* 1st component */}

{/* for spacing only */}
<Box w="40px" ></Box>
{/* for spacing only */}

      {/* 2nd component */}
      <Box  minW="240px" maxW="587px" w="100%">
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<BiSearchAlt color='rgb(99, 93, 255)' size={"24px"} />}
          />
          <Input border="1px" borderRadius={"8px"} variant='filled' type="search" placeholder='Search' 
            _focus={{
              outline: "0px",
              borderColor: "rgb(99, 93, 255)",
              boxShadow: "rgb(0 0 0 / 8%) 0px 0.1rem 0.1rem inset, rgb(158 128 255 / 60%) 0px 0px 0.6rem"
            }}
           
            _placeholder={{ fontWeight: "semibold" }}
          />
        </InputGroup>
      </Box>
{/*  2nd component */}

{/* for spacing only */}
<Box w="40px" ></Box>
{/* for spacing only */}

{/*  3rd component */}
      <Box><ButtonGroup  >
        <Button colorScheme={"guru"} variant="outline" size="guruMd" >
          <Text  >Log in</Text>
        </Button>
        <Button colorScheme={"guru"} size="guruMd" >
          <Text  >Sign up</Text>
        </Button>
      </ButtonGroup></Box>
{/* 3rd component */}

    </Flex>
  )
}

export default Navbar