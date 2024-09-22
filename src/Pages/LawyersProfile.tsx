import { Box, Button, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
import { style } from "../styles/StyledConstants";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
// import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { GiInjustice } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { FcVideoCall } from "react-icons/fc";

const LawyersProfile = () => {
  return (
    <>
      <FlexRow hrAlign="flex-start">
        <FlexColumn width="30%">
          <Image
            src="https://cdn2.vectorstock.com/i/1000x1000/67/21/lawyer-icon-profession-and-job-vector-33186721.jpg"
            maxHeight="6.5rem"
          />
          <Flex>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png"
              alt="twitter-verified"
              width="1.5rem"
            />
            <Text>Verified</Text>
          </Flex>
        </FlexColumn>
        <FlexColumn>
          <FlexRow hrAlign="flex-start">
            <Box width="100%" marginTop="1.5rem">
              <Text
                fontSize={style.font.h3}
                fontWeight={style.fontWeight.extraDark}
              >
                Advocate Sudershani Ray
              </Text>
              <Text fontSize={style.font.h6}>Star 4.6 | 100+ user ratings</Text>
              <Divider
                marginTop="2rem"
                marginBottom="2rem"
                orientation="horizontal"
              />
            </Box>
            <Flex alignItems="center" marginRight="1rem">
              <Stack spacing={3} direction="row">
                <Button colorScheme="blue" variant="outline">
                  <FiPhoneCall />
                  <Text marginLeft="0.5rem">Call Now</Text>
                </Button>
                <Button colorScheme="green" variant="outline">
                  <FcVideoCall />
                  <Text marginLeft="0.5rem">Video Call</Text>
                </Button>
              </Stack>
            </Flex>
          </FlexRow>
          <FlexRow>
            <FlexColumn width="40%" vrAlign="flex-start">
              <Box>
                <Flex alignItems="center">
                  <GrLocation />
                  <Text marginLeft="0.5rem">Location: Indore</Text>
                </Flex>
                <Flex alignItems="center">
                  <GoBriefcase />
                  <Text marginLeft="0.5rem">Experience: 7</Text>
                </Flex>
              </Box>
            </FlexColumn>
            <FlexColumn vrAlign="flex-start">
              <Box>
                <Flex alignItems="center">
                  <GiInjustice />
                  <Text marginLeft="0.5rem">Languages: English Hindi</Text>
                </Flex>
                <Flex alignItems="center">
                  <GiInjustice />
                  <Text marginLeft="0.5rem">Practice Areas: </Text>
                </Flex>
              </Box>
            </FlexColumn>
          </FlexRow>
          <Divider
            marginTop="2rem"
            marginBottom="2rem"
            orientation="horizontal"
          />
        </FlexColumn>
      </FlexRow>
      <Box padding="0% 6% 0% 6%">
        <Text>
          Advocate Sudershani has since been practicing and handling cases
          independently with a result oriented approach, both professionally and
          ethically and has now acquired 8 years of professional experience in
          providing legal consultancy and advisory services. She has completed
          her BA.LLB(Hons) from Jamia Millia Islamia and has been practicing and
          handling cases independently and provides legal consultancy and
          advisory services. Advocate Sudershani provides services in various
          field of civil as well as corporate laws, inter-alia, Suits, Writs,
          Petitions, Appeals, Revisions, Complaints relating to debt recovery,
          dishonor of cheques, rent control act, property disputes, matrimonial
          disputes, consumer complaints, complaints pertaining to Food
          Adulteration Act and service matter . In addition to this she is
          skilled in drafting and vetting various kinds of agreement such as
          Master Service Agreement, Service Agreement, Teaming Agreement,
          Consortium Agreement, various Tripartite Agreement, RFQs, Letter of
          Intent, MOU, Agreement with Celebrity, Endorsement Agreement, License
          Agreement, Sub-Licensing Agreement, Sub-Contracting, Third Party
          Agreement, Sale Deed, Corporate Lease Agreement, Development
          Agreement(Real estate), broadcasting agreement. Advocate Ray enrolled
          with the Bar Council of Delhi in 2008. She is also a member of the
          Delhi Bar Council.
        </Text>
      </Box>
    </>
  );
};

export default LawyersProfile;
