import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { 
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from '../../components/SideBar'
import { Input } from '../../components/Form/Input'
import Link from "next/link"

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email(),
  password: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres'),
  password_confirm: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'Senhas divergentes')
})

export default function UserCreate() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log({ values })
  }


  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading>Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register('name')}
              />
              <Input 
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="password"
                type="password"
                label="Nome Completo"
                error={errors.password}
                {...register('password')}
              />
              <Input 
                name="password_confirm"
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirm}
                {...register('password_confirm')}
              />
            </SimpleGrid>

          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}