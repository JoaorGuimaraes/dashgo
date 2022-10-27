import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/input"

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDirection="column"
        >
          <Stack spacing="4">

            <Input name="email" label="E-mal" type="Email"/>
            <Input name="password" label="Senha" type="password"/>

            <Button
              type="submit"
              mt="6"
              colorScheme="pink">
                Entrar
              </Button>
          </Stack>

      </Flex>
    </Flex>
  )
}