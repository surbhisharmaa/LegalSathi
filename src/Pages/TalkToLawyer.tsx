"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
import Leaderboard from "../Components/Leaderboard";
import { style } from "../styles/StyledConstants";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import ProfileCards from "../Components/Cards/ProfileCard";
import ProfileCard from "../Components/Cards/ProfileCard";
import lawyersProfile from "../data/lawyersProfile";

export default function TalkToLawyer() {
  return (
    <>
      <FlexRow vrAlign="flex-start">
        <FlexColumn vrAlign="flex-start" padding="2rem">
          <Box>
            <Text
              fontSize={style.font.h1}
              fontWeight={style.fontWeight.extraDark}
              marginBottom={0}
            >
              Online Lawyer Consultation
            </Text>
            <Text
              fontSize={style.font.h1}
              fontWeight={style.fontWeight.extraDark}
              marginBottom={0}
            >
              Anytime Anywhere
            </Text>
            <Text
              fontSize={style.font.h4}
              marginTop="1rem"
              fontWeight={style.fontWeight.dark}
            >
              Legal Consultation Starts from{" "}
              <span color="blue">₹19.99/min</span>
            </Text>
            <Text marginTop="1rem">+ 128 Lawyers are online </Text>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color="white"
              href={"/register"}
              _hover={{
                bg: "#171a53",
              }}
              background={
                "linear-gradient(100.07deg, #2A85FF 0.39%, #2448C7 73.45%)"
              }
              marginTop="1rem"
              marginBottom="1rem"
            >
              Consult Now
            </Button>
            <FlexRow vrAlign="center" hrAlign="flex-start">
              <IoMdPeople display="inline" />
              <span>
                <Text marginLeft="0.5rem" marginRight="0.5rem">
                  Experienced Lawyers |
                </Text>
              </span>
              <FiPhoneCall display="inline" />
              <span>
                <Text marginLeft="0.5rem" marginRight="0.5rem">
                  Secure Calls |
                </Text>
              </span>
              <AiOutlineClockCircle display="inline" />
              <span>
                <Text marginLeft="0.5rem" marginRight="0.5rem">
                  24/7
                </Text>
              </span>
            </FlexRow>
          </Box>
          <Divider
            marginTop="2rem"
            marginBottom="2rem"
            orientation="horizontal"
            borderWidth="3px"
          />
        </FlexColumn>
        <FlexColumn>
          <Leaderboard />
        </FlexColumn>
      </FlexRow>
      <FlexRow hrAlign="flex-start" padding="2rem">
        {lawyersProfile.map((lawyer) => (
          <ProfileCard key={lawyer._id} lawyer={lawyer} />
        ))}
      </FlexRow>
    </>
  );
}
