import { Box, Flex, Text } from "@chakra-ui/react";
import { PlaskemLogo } from "../UI/Assets";

export default function Footer() {
    return (
        <Flex backgroundColor="#f9fafb" wrap={"wrap"} padding="8em 0 2em">
            <Box width={{ base: "100%", lg: "25%" }} padding="3em">
                <PlaskemLogo />
                <Text margin={"1em 0"}>
                    <a>Avenida Santos Dumont, 1712 - Centro, Lauro de Freitas - BA, 42702-400</a>
                </Text>
                <Text>
                    <a>(71) 3186-0399</a>
                </Text>
            </Box>
            <Flex width={{ base: "100%", lg: "25%" }} justifyContent="center" alignItems={"center"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.070125752584!2d-38.3373800846589!3d-12.903212290900761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716163f267fa54d%3A0x82da6a19b652748f!2sPlaskem%20Embalagens!5e0!3m2!1sen!2sbr!4v1667103629110!5m2!1sen!2sbr"
                    width="600"
                    height="200px"
                    loading="lazy"
                ></iframe>
            </Flex>
            <Box width={{ base: "100%", lg: "25%" }} textAlign="center" paddingTop="2em">
                <Text>
                    <a>Sobre nós</a>
                </Text>
                <Text>
                    <a>Política de qualidade</a>
                </Text>
                <Text>
                    <a>Nossos produtos</a>
                </Text>
                <Text>
                    <a>Meio ambiente</a>
                </Text>
            </Box>
            <Box width={{ base: "100%", lg: "25%" }} textAlign="center" paddingTop="2em">
                <Text>
                    <a>Trabalhe conosco</a>
                </Text>
                <Text>
                    <a>Contato</a>
                </Text>
                <Text>
                    <a>Pesquisa de satisfação</a>
                </Text>
            </Box>
        </Flex>
    );
}
