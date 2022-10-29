import { ReactNode } from "react";
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { PlaskemLogo } from "../UI/Assets";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={href}
    >
        {children}
    </Link>
);

function NavBarLinks() {
    return (
        <>
            <NavLink key={"home"} href={"/home"}>
                Home
            </NavLink>
            <NavLink key={"empresa"} href={"/empresa"}>
                Empresa
            </NavLink>
            <NavLink key={"politica-de-qualidade"} href={"/politica-de-qualidade"}>
                Política de qualidade
            </NavLink>
            <Box w={20} />
            <NavLink key={"meio-ambiente"} href={"/meio-ambiente"}>
                Meio Ambiente
            </NavLink>
        </>
    );
}

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            px={4}
            width="100%"
            filter="drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.03));"
            boxShadow={"0 -100px 200px"}
            marginBottom="10em"
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"} height="96px">
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <Flex
                    marginLeft="1em"
                    width="100%"
                    alignItems={"center"}
                    justifyContent="space-between"
                >
                    <PlaskemLogo />
                    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
                        <NavBarLinks />
                    </HStack>
                    <Flex justifyContent={"flex-end"}>
                        <Button>Fale conosco</Button>
                    </Flex>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        <NavBarLinks />
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
