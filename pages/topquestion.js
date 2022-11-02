import { React } from "react";
import {
  Flex,
  Box,
  Divider,
  Heading,
  Tag,
  Text,
  Image,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { ViewIcon } from "@chakra-ui/icons";
import { Topquestion } from "../components/Topquestion";

const Question = () => {
  return (
    <>
      <Flex direction={"column"}>
        <Heading
          // border={"1px"}
          size="lg"
          width={"72%"}
          marginInline="auto"
          my={"2rem"}
          //   ml="15rem"
        >
          Top Questions
        </Heading>

        <Tabs width="75%" marginInline={"auto"}>
          <TabList
            // border={"1px"}
            display="flex"
            justifyContent={"space-evenly"}
          >
            <Tab className="questionTabs">Top Question</Tab>
            <Tab className="questionTabs">Unanswerd</Tab>
            <Tab className="questionTabs">Newest</Tab>
            <Tab className="questionTabs">Votes</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Topquestion />
            </TabPanel>

            <TabPanel>
              <Topquestion />
              <Topquestion />
            </TabPanel>

            <TabPanel>
              <Topquestion />
            </TabPanel>

            <TabPanel>
              <Topquestion />
              <Topquestion />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default Question;
