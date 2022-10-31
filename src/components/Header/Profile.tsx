import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>João Guimarães</Text>
                <Text color="gray.300" fontSize="small">
                    joaoguimaraes705@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="João Guimarães" />
        </Flex>
    )
}