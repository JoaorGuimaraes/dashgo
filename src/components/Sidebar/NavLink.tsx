import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    const router = useRouter();

    return (
        <ChakraLink display="flex" alignItems="center" {...rest} onClick={() => router.push(href)}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="md">{children}</Text>
        </ChakraLink>
    )
}