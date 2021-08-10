import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsBookLine, RiDashboard2Line, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export default function SiderBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" align="center">
              <Icon as={RiDashboard2Line} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" align="center">
              <Icon as={RiContactsBookLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Formulários</Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}