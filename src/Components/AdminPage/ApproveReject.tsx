import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FlexColumn from "../../_ui/flex/FlexColumn";
import FlexRow from "../../_ui/flex/FlexRow";
import { style } from "../../styles/StyledConstants";

type Props = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  state?: string;
  barCouncilId?: string;
  gender?: string;
  barCouncilFile?: File;
  specializations?: string[];
  photo?: File;
  description?: string;
  experience?: string;
  aadhar?: string;
  languages?: string[];
};

interface ApprovalRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  barCouncilFile: File;
  barCouncilId: string;
  gender: string;
  specializations: string[];
  photo: File;
  description: string;
  experience: number;
  aadhar: string;
  languages: string[];
}

function ApproveReject({
  _id,
  firstName,
  lastName,
  email,
  city,
  state,
  barCouncilFile,
  barCouncilId,
  gender,
  specializations,
  photo,
  description,
  experience,
  aadhar,
}: Props) {
  const [approvalRequests, setApprovalRequests] = useState<ApprovalRequest[]>(
    []
  );
  const [selectedRequest, setSelectedRequest] =
    useState<ApprovalRequest | null>(null);

  useEffect(() => {
    // Fetch approval requests when the component mounts
    fetch("/api/admin/approval-requests")
      .then((response) => response.json())
      .then((data: ApprovalRequest[]) => {
        setApprovalRequests(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApproveReject = (id: string, status: string) => {
    fetch(`/api/admin/approval-requests/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data: ApprovalRequest) => {
        // Update the approval request status in the frontend
        const updatedRequests = approvalRequests.map((request) =>
          request._id === data._id ? data : request
        );
        setApprovalRequests(updatedRequests);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      marginBottom="1rem"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      width="100%"
    >
      <Text
        fontSize={style.font.h3}
        fontWeight={style.fontWeight.dark}
        textAlign="center"
      >
        Your Information
      </Text>
      <FlexRow hrAlign="space-evenly">
        <FlexColumn width="50%" vrAlign="flex-start">
          <Text>First Name</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {firstName ? firstName : "NA"}
          </Box>
          <Text>Last Name</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {lastName ? lastName : "Last Name"}
          </Box>
          <Text>EMAIL</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {email ? email : "NA"}
          </Box>
          <Text>DOB</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {firstName ? firstName : "NA"}
          </Box>
          <Text>CITY</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {city ? city : "NA"}
          </Box>
          <Text>State</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {state ? state : "NA"}
          </Box>
        </FlexColumn>

        <FlexColumn width="50%" vrAlign="flex-start">
          <Text textAlign="start">BAR COUNCIL ID </Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {barCouncilId ? barCouncilId : "NA"}
          </Box>
          <Text>SPECIALIZATIONS</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {specializations ? specializations : "specializations"}
          </Box>
          <Text>GENDER</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {gender ? gender : "Male"}
          </Box>
          <Text>EXPERIENCE</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {experience ? experience : "experience"}
          </Box>
          <Text>AADHAR NO.</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {aadhar ? aadhar : "aadhar"}
          </Box>
          <Text>State</Text>
          <Box
            marginBottom="1rem"
            paddingLeft="5px"
            rounded={"md"}
            border="2px solid #3d3d3d"
            maxW="20rem"
            minW="15rem"
          >
            {state ? state : "NA"}
          </Box>
        </FlexColumn>
      </FlexRow>
      <Text
        fontSize={style.font.h6}
        fontWeight={style.fontWeight.dark}
        textAlign="center"
        marginTop="2rem"
      >
        Description
      </Text>
      <FlexRow hrAlign="flex-start">
        <Box
          rounded={"md"}
          border="1px solid #3d3d3d"
          width="100%"
          padding="1rem"
          marginTop="1rem"
        >
          {description ? description : "Description"}
        </Box>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <Text
            marginTop="2rem"
            fontSize={style.font.h6}
            fontWeight={style.fontWeight.dark}
          >
            Photo
          </Text>
          {photo}
        </FlexColumn>
        <FlexColumn>
          <Text
            marginTop="2rem"
            fontSize={style.font.h6}
            fontWeight={style.fontWeight.dark}
          >
            DOCUMENTS
          </Text>
          document
        </FlexColumn>
      </FlexRow>
      <FlexRow hrAlign="space-evenly">
        <Button
          colorScheme="green"
          size="sm"
          // onClick={() => handleApproveReject(data._id, "approve")}
        >
          Approve
        </Button>
        <Button
          colorScheme="red"
          size="sm"
          // onClick={() => handleApproveReject(data._id, "reject")}
        >
          Reject
        </Button>
      </FlexRow>
    </Box>
  );
}

export default ApproveReject;
