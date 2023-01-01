import React, { useEffect } from "react";
import {
  Flex,
  Box,
  Center,
  Heading,
  Button,
  Textarea,
  Tooltip,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AvatarCard from "../../components/AvatarCard";
export default function Editor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <>
      <Flex border={"1px"} bg="black">
        <Flex direction={"column"} width="100%">
          <Box
          //    border={"1px"}
          >
            <Box>
              <Box pos={"relative"}>
                <CodeMirror
                  //   value=""
                  placeholder={"Enter The Code"}
                  height="500px"
                  width="100%"
                  extensions={[javascript({ jsx: true })]}
                  theme={dracula}
                  basicSetup={{
                    foldGutter: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                    bracketMatching: true,
                    highlightActiveLine: true,
                    syntaxHighlighting: true,
                    autocompletion: true,
                  }}
                  onChange={onChange}
                />
              </Box>

              <Flex align={"center"} justify="center">
                <Box position={"absolute"} bottom="12rem" right={"24rem"}>
                  <Select
                    placeholder="Select Lang"
                    color={"grey"}
                    fontWeight="bold"
                    required
                  >
                    <option color="black" value="c++">
                      C++
                    </option>
                    <option color="black" value="Python">
                      Python
                    </option>
                    <option color="black" value="Javascript">
                      Javascript
                    </option>
                  </Select>
                </Box>
                <Tooltip label="Run Code">
                  <Box
                    position={"absolute"}
                    bottom="11.7rem"
                    right={"20rem"}
                    // border="1px"
                    // borderColor={"#524DFF"}
                    // borderRadius={"50%"}
                    // borderColor="grey.100"
                    _hover={{
                      //   border: "1px",
                      //   borderColor: "black",
                      borderRadius: "50%",
                      boxShadow: "0 0 40px #524DFF",
                      cursor: "pointer",
                    }}
                  >
                    <BsFillPlayCircleFill
                      fill="#524DFF"
                      size={"50px"}
                      //   onClick={() => {
                      //     console.log("button clicked");
                      //   }}
                    />
                  </Box>
                </Tooltip>
              </Flex>
            </Box>
          </Box>
          <Box border={"1px"} borderColor="white" height="100%" bg={"#1c1e29"}>
            <Heading size={"lg"} mt="0.5rem" ml={"0.5rem"} color={"white"}>
              Output
            </Heading>
            <Text
              //   ml={"6rem"}
              mt="0.5rem"
              p={"1rem"}
              color={"white"}
              //  border="1px"
              bg="grey"
            >
              Hello World
            </Text>
          </Box>
        </Flex>
        <Box
          bg={"#1c1e29"}
          //   border={"1px"}
          width="20%"
          height={"90.4vh"}
          //   borderColor="#524DFF"

          //   p={"1rem"}
        >
          <Flex
            height={"100%"}
            direction={"column"}
            justify="space-between"
            align={"center"}
          >
            <Box
              color={"white"}
              bg="#524DFF"
              p={"0.7rem"}
              mt="2rem"
              w="90%"
              borderRadius={"8px"}
            >
              <Center fontWeight={"semibold"}>Connected User</Center>
            </Box>
            <Box
              //   border={"1px"}
              //   borderColor="grey.400"
              width={"100%"}
              height="70%"
            >
              <AvatarCard />
            </Box>
            <Flex justify={"space-evenly"} width="100%" mb={"2rem"}>
              <Button colorScheme={"green"} variant="outline">
                Copy Room-ID
              </Button>
              <Button colorScheme={"red"} border="none">
                Leave
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
