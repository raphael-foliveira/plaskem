import { ReactNode, useEffect, useState } from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Link as ChakraLink,
    Stack,
    Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { PlaskemLogo } from "../UI/Assets";
import { m } from "framer-motion";

type LinkElementInfo = {
    name: string;
    href: string;
};

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
    const router = useRouter();
    const [textColor, setTextColor] = useState("black");
    const [fontWeight, setFontWeight] = useState("normal");

    useEffect(() => {
        if (href === router.pathname) {
            setTextColor("pkmGreen.400");
            setFontWeight("extrabold");
        }
    }, []);

    return (
        <Link href={href}>
            <Button
                rounded={"md"}
                backgroundColor="transparent"
                _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                }}
                _focus={{
                    bg: useColorModeValue("gray.200", "gray.700"),
                }}
                textColor={textColor}
                fontWeight={fontWeight}
            >
                {children}
            </Button>
        </Link>
    );
};
function NavBarLinks() {
    const linkElements: LinkElementInfo[] = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Empresa",
            href: "/empresa",
        },
        {
            name: "Política de qualidade",
            href: "/politica-de-qualidade",
        },
        {
            name: "Meio Ambiente",
            href: "/meio-ambiente",
        },
    ];
    return (
        <>
            {linkElements.map((element) => {
                return (
                    <Box width={"200px"} textAlign="center" key={element.name}>
                        <NavLink href={element.href}>{element.name}</NavLink>
                    </Box>
                );
            })}
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
            boxShadow={"0 -50px 100px"}
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
                <Flex width="100%" alignItems={"center"} justifyContent="space-between">
                    <Box marginLeft={"1em"}>
                        <Link href="/">
                            <PlaskemLogo />
                        </Link>
                    </Box>
                    <Flex
                        gap={8}
                        display={{ base: "none", lg: "flex" }}
                        width="100%"
                        justifyContent={"center"}
                    >
                        <NavBarLinks />
                    </Flex>
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
