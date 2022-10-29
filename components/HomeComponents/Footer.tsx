import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { PlaskemLogo } from "../UI/Assets";

export default function Footer() {
    return (
        <Flex backgroundColor="#f9fafb" wrap={"wrap"} padding="8em 0 2em">
            <Box width={{ sm: "100%", lg: "25%" }} padding="3em">
                <PlaskemLogo />
                <a>Avenida Santos Dumont, 1712 - Centro, Lauro de Freitas - BA, 42702-400</a>
                <a>(71) 3186-0399</a>
            </Box>
            <Box width={{ sm: "100%", lg: "25%" }}></Box>
            <Box width={{ sm: "100%", lg: "25%" }} textAlign="center">
                <Box height={"20%"}></Box>
                <a>Sobre nós</a>
                <a>Política de qualidade</a>
                <a>Nossos produtos</a>
                <a>Meio ambiente</a>
            </Box>
            <Box width={{ sm: "100%", lg: "25%" }} textAlign="center">
                <Box height={"20%"}></Box>
                <a>Trabalhe conosco</a>
                <a>Contato</a>
                <a>Pesquisa de satisfação</a>
            </Box>
        </Flex>
    );
}
