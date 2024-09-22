"use client";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
  Tag,
  Divider,
} from "@chakra-ui/react";
import { FcVideoCall } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillStar, AiOutlineMessage } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import FlexColumn from "../../_ui/flex/FlexColumn";
import FlexRow from "../../_ui/flex/FlexRow";
import { style } from "../../styles/StyledConstants";

interface ProfileCardProps {
  lawyer: {
    _id: string;
    name: string;
    rating: string;
    src: string;
    location: string;
    experience: string;
    languages: string[];
    categories: string[];
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ lawyer }) => {
  const { name, location, experience, languages, categories, src, rating } =
    lawyer;

  return (
    <Box boxShadow="2xl" rounded="lg" p={5} width="25rem" marginRight="1.25rem">
      <FlexRow vrAlign="flex-start">
        <FlexColumn vrAlign="flex-start">
          <Box width="15rem">
            <Heading size="lg">{name}</Heading>
            <Text color="green" fontSize={style.font.h5}>Available</Text>
          </Box>
          <Flex
            backgroundColor="#2f8e39"
            alignItems="center"
            width="3.5rem"
            justifyContent="center"
            borderRadius="4px"
          >
            <Box color="white" marginRight="2px">
              {rating}
            </Box>
            <AiFillStar color="white" />
          </Flex>
        </FlexColumn>
        <Image
          src={src}
          alt="lawyer-image"
          borderRadius="50%"
          height="6rem"
          width="6rem"
        />
      </FlexRow>
      <Box marginTop="2rem">
        <Flex alignItems="center">
          <GrLocation />
          <Text marginLeft="0.5rem">{location}</Text>
        </Flex>
        <Flex alignItems="center">
          <GoBriefcase />
          <Text marginLeft="0.5rem">{experience} Years of Experience</Text>
        </Flex>

        <Flex alignItems="center">
          <AiOutlineMessage />

          <Text marginLeft="0.5rem">{languages.join(", ")}</Text>
        </Flex>
      </Box>

      <Box justifyContent="space-between" marginTop="2rem">
        <Text fontWeight="500" fontSize="1.2rem" marginBottom="2px">
          Practice areas and Skills:
        </Text>

        {categories.map((category, index) => (
          <Tag margin="0.2rem" key={index}>
            {category}
          </Tag>
        ))}
      </Box>
      <Center marginTop="0.5rem">
        <Divider orientation="horizontal" width="80%" />
      </Center>

      <Flex
        marginTop="1rem"
        marginRight="1rem"
        justifyContent="flex-end"
        paddingBottom="0.2rem"
      >
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
    </Box>
  );
};

export default ProfileCard;

// export default function ProfileCards({
//   lawyer
// }: Props) {
//   return (

//     <Box

//       bg={useColorModeValue("white", "gray.900")}
//       boxShadow={"2xl"}
//       rounded={"lg"}
//       p={5}
//       width="25rem"
//     >
//       <FlexRow>
//         <Box width="15rem">
//           <Box>
//             <Heading size="sm">{name}</Heading>
//             <Text color="green">Available</Text>
//           </Box>

//           <Box marginTop="2rem">
//             <Flex alignItems="center">
//               <GrLocation />
//               <Text marginLeft="0.5rem">{location}</Text>
//             </Flex>
//             <Flex alignItems="center">
//               <GoBriefcase />
//               <Text marginLeft="0.5rem">{experience} Years of Experience</Text>
//             </Flex>

//             <Flex alignItems="center">
//               <AiOutlineMessage />
//               {lawyersProfile.languages.map((item:any, index:any) => (
//           <Text key={index}>{item}</Text>
//         ))}
//               <Text marginLeft="0.5rem">
//                 English, Hindi
//                 </Text>
//             </Flex>
//           </Box>
//         </Box>
//         <FlexColumn width="10rem">{src}</FlexColumn>
//       </FlexRow>

//       <Box justifyContent="space-between" marginTop="2rem">
//         <Text fontWeight="500" fontSize="1.2rem" marginBottom="2px">
//           Practice areas and Skills:
//         </Text>
//         {lawyersProfile.categories.map((item:any, index:any) => (
//           <Tag key={index}>{item}</Tag>
//         ))}
//         <Tag margin="0.2rem">Civil Matters</Tag>
//         <Tag margin="0.2rem">Property & Real State</Tag>
//         <Tag margin="0.2rem">Cyber Crime</Tag>
//       </Box>
//       <Center marginTop="0.5rem">
//         <Divider orientation="horizontal" width="80%" />{" "}
//       </Center>

//       <Flex
//         marginTop="1rem"
//         marginRight="1rem"
//         justifyContent="flex-end"
//         paddingBottom="0.2rem"
//       >
//         <Stack spacing={3} direction="row">
//           <Button colorScheme="blue" variant="outline">
//             <FiPhoneCall />
//             <Text marginLeft="0.5rem">Call Now</Text>
//           </Button>
//           <Button colorScheme="green" variant="outline">
//             <FcVideoCall />
//             <Text marginLeft="0.5rem">Video Call</Text>
//           </Button>
//         </Stack>
//       </Flex>
//     </Box>
//   );
// }
