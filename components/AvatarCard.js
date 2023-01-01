import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Flex,
  Text,
  WrapItem,
} from "@chakra-ui/react";

const AvatarCard = () => {
  return (
    <>
      <Flex justify={"space-evenly"} wrap="wrap" width={"100%"} my="1rem">
        <Flex my={"0.7rem"} align={"center"} direction="column">
          <Avatar name="Nabeel Muzaffar" />
          <Text fontSize="sm" size={"sm"} color={"white"}>
            Nabeel Muzaffar
          </Text>
        </Flex>
        <Flex my={"0.7rem"} align={"center"} direction="column">
          <Avatar name="Hunfa Jalil" />
          <Text size={"sm"} fontSize="sm" color={"white"}>
            Hunfa Jalil
          </Text>
        </Flex>
        <Flex my={"0.7rem"} align={"center"} direction="column">
          <Avatar name="Abdullah Quaiser" />
          <Text size={"sm"} fontSize="sm" color={"white"}>
            Abdullah Quaiser
          </Text>
        </Flex>
        <Flex my={"0.7rem"} align={"center"} direction="column">
          <Avatar name="Shahraiz Aftab" />
          <Text size={"sm"} fontSize="sm" color={"white"}>
            Shahraiz Aftab
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default AvatarCard;
