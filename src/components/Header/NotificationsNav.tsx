import { Icon, Stack } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
    return (
        <Stack
            direction="row"
            spacing="6"
            mx="8"
            px="8"
            py="1"
            color="gray.300"
            borderRightWidth="1"
            borderColor="gray.700">
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />
        </Stack>
    )
}