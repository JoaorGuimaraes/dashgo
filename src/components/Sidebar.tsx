import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return(
        <Box as="aside" width="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
                    <Stack>
                        <Link display="flex" align="center">
                            <Icon as={RiDashboardLine} fontSize="20"/>
                            <Text ml="4" fontWeight="md">Dashboard</Text>
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiContactsLine} fontSize="20"/>
                            <Text ml="4" fontWeight="md">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
                    <Stack>
                        <Link display="flex" align="center">
                            <Icon as={RiInputMethodLine} fontSize="20"/>
                            <Text ml="4" fontWeight="md">Formulários</Text>
                        </Link>
                        <Link display="flex" align="center">
                            <Icon as={RiGitMergeLine} fontSize="20"/>
                            <Text ml="4" fontWeight="md">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}