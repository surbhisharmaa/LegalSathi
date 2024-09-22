import React from 'react';
import {
  Box,
  Text,
  Flex,
  Avatar,
  Stack,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa'; // You can use FontAwesome or any other icon library

// Define prop types for the component
interface RatingAndReviewCardProps {
  userName: string;
  userProfilePhoto: string;
  userRating: number;
  reviewContent: string;
}

const RatingAndReviewCard: React.FC<RatingAndReviewCardProps> = ({
  userName,
  userProfilePhoto,
  userRating,
  reviewContent,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={4}
      boxShadow="md"
      backgroundColor="white"
    >
      <Flex alignItems="center">
        <Avatar src={userProfilePhoto} name={userName} size="md" />
        <Text ml={2} fontWeight="bold">
          {userName}
        </Text>
      </Flex>

      <HStack mt={2} spacing={1}>
        {[...Array(userRating)].map((_, index) => (
          <Icon as={FaStar} key={index} color="yellow.500" />
        ))}
      </HStack>

      <Text mt={2}>{reviewContent}</Text>
    </Box>
  );
};

export default RatingAndReviewCard;
