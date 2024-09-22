import { Box } from '@chakra-ui/react';

const Assistant = () => {
  return (
    <Box
      id="askDishaLuncher"
    //   draggable="true"

      bg="transparent"
      w="120px"
      h="120px"
      boxShadow="0px 0px 50px 0px rgba(0, 0, 0, 0.06)"
    //   backfaceVisibility="hidden"
      transition="all 0.5s ease 0s"
      cursor="pointer"
      zIndex="9"
      borderRadius="50%"
      position="fixed"   // Make it fixed
      right="1rem"         // Stick to the right edge
      bottom="1rem"        // Stick to the bottom edge
      minW="120px"
    >
      <img
        src="https://sdk.irctc.corover.ai/askdisha-bucket/launcher.gif"
        alt="Launcher"
        style={{ width: '100%' }}
      />
      <img
        src="https://sdk.irctc.corover.ai/askdisha-bucket/minimum.png"
        alt="Minimum"
        style={{ position: 'absolute', right: '98px', width: '16px', top: '-2px' }}
      />
    </Box>
  );
};

export default Assistant;
