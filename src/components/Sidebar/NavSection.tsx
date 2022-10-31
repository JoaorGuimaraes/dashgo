import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionsProps {
    title: string;
    children: ReactNode;
}


export function NavSection({title, children} : NavSectionsProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
            <Stack>
                {children}
            </Stack>
        </Box>
    )
}