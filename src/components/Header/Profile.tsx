import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileDataProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileDataProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rangel Netto</Text>
          <Text color="gray.300" fontSize="small">rangel@galo.com.br</Text>
        </Box>
      )}

      <Avatar size="md" name="Rangel Netto" src="https://avatars.githubusercontent.com/u/13886651?v=4"/>
    </Flex>  
  )
}