import {
    Grid,
    GridItem,
    Heading,
    Stack,
    Text,
    Input,
    Textarea,
    Box,
    Button,
    Flex,
    Wrap,
} from "@chakra-ui/react";

export default function HomeContactForm() {
    return (
        <Flex backgroundColor="#f9fafb" width={"100%"} wrap="wrap" paddingTop="5em">
            <Box width={{ base: "10%", md: "25%" }}></Box>
            <Box width={{ base: "80%", md: "50%" }} textAlign={"center"}>
                <Heading>Entre em contato com a gente</Heading>
                <Text>
                    Para saber mais sobre os nossos produtos, deixe uma mensagem que entraremos em
                    contato com você!
                </Text>
            </Box>
            <Box width={{ base: "10%", md: "25%" }}></Box>
            <Stack textAlign={"end"} width="30%" paddingRight={"2em"}>
                <label htmlFor="name">Nome</label>
                <label htmlFor="email">Email</label>
                <label htmlFor="phone">DDD + Telefone</label>
                <label htmlFor="message">Mensagem</label>
            </Stack>
            <Stack textAlign={"end"} width={{ base: "65%", lg: "50%" }}>
                <Input name="name" />
                <Input name="email" />
                <Input name="phone" />
                <Textarea rows={5} name="message" resize={"none"} />
                <Flex justifyContent={"flex-end"}>
                    <Button>Enviar</Button>
                </Flex>
            </Stack>
            <Box width={"25%"}></Box>
        </Flex>
    );
}
