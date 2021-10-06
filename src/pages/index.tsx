import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { formState, handleSubmit, register } = useForm()

  const { errors } = formState
  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log({ values })
  }

  console.log({ errors })

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email', { required: 'Email obrigatório' })}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register('password')}
          />
          <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
