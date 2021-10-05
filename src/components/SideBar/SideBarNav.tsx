import { Stack } from '@chakra-ui/react';
import { 
  RiContactsBookLine,
  RiDashboard2Line,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri';
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SiderBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboard2Line}>Dashboard</NavLink>
        <NavLink icon={RiContactsBookLine}>Usuários</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  )
}