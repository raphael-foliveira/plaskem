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
import { useRouter } from "next/router";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { PlaskemLogo } from "../UI/Assets";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
    const router = useRouter();
    return (
        <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
            href={href}
            variant={href === router.pathname ? "pkmGreenLink" : "pkmDefaultLink"}
        >
            {children}
        </Link>
    );
};
function NavBarLinks() {
    return (
        <>
            <NavLink key={"home"} href={"/"}>
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
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"} height="96px">
                <IconButton
                    size={"md"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ lg: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                    marginRight="2em"
                />
                <Flex
                    marginLeft="1em"
                    width="100%"
                    alignItems={"center"}
                    justifyContent="space-between"
                >
                    <PlaskemLogo />
                    <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
                        <NavBarLinks />
                    </HStack>
                    <Flex justifyContent={"flex-end"} display={{ base: "none", lg: "flex" }}>
                        <Link href={"/fale-conosco"}>
                            <Button>Fale conosco</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ lg: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                        <NavBarLinks />
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
