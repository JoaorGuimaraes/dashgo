import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function dashboard(){
    return(
        <Flex direction="column" height="100vh">
            <Header />

            <Flex width="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar />
            </Flex>
        </Flex>
    )
}