import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useRouter } from "next/router";

export default function UserList() {

    const router = useRouter();
    return (
        <Box>
            <Header />

            <Flex width="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon
                                as={RiAddLine} />}
                            onClick={() => router.push("/users/create")}>
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th> USUÁRIO </Th>
                                <Th> DATA DE CADASTRO </Th>

                                <Th width="8"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>

                                <Td>
                                    <Box>
                                        <Text fontWeight="bold"> João Guimarães </Text>
                                        <Text fontWeight="bold" color="gray.300"> joaoguimaraes705@gmail.com</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    04 de abril, 2021
                                </Td>

                                <Td px="6" color="gray.300" width="8">
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon
                                            as={RiPencilLine} />}>
                                        Criar novo
                                    </Button>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}