import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useRouter } from "next/router";

export default function CreateUser() {

    const router = useRouter();
    return (
        <Box>
            <Header />

            <Flex width="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="green.700" />

                    <Stack direction="column" spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" type="email" label="e-mail" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação de senha" />
                        </SimpleGrid>
                    </Stack>

                    <Flex mt="8" justify="flex-end">
                        <Stack direction="row" spacing="4">
                            <Button colorScheme="whiteAlpha" onClick={() => router.push("/users")}>Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </Stack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}