import {
    Stack,
    Heading,
    InputGroup,
    Flex,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    Text,
} from "@chakra-ui/react";

export default function ContactForm() {
    return (
        <>
            <Box width={{ base: "10%", md: "40%" }} />
            <Stack textAlign={"end"} width={{ base: "100%" }} gap={3} padding="1.5em">
                <Box textAlign={"left"} marginLeft={{ lg: "30%" }} width={{ lg: "40%" }}>
                    <Heading marginBottom={4}>Entre em contato com a gente</Heading>
                    <Text marginBottom={6}>
                        Para saber mais sobre os nossos produtos, deixe uma mensagem que entraremos
                        em contato com você!
                    </Text>
                </Box>
                <InputGroup>
                    <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                        <FormLabel>Nome</FormLabel>
                    </Flex>
                    <Input name="name" width={{ base: "75%", lg: "40%" }} />
                </InputGroup>
                <InputGroup>
                    <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                        <FormLabel>Email</FormLabel>
                    </Flex>
                    <Input name="email" width={{ base: "75%", lg: "40%" }} />
                </InputGroup>
                <InputGroup>
                    <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                        <FormLabel>DDD + Telefone</FormLabel>
                    </Flex>
                    <Input name="phone" width={{ base: "75%", lg: "40%" }} />
                </InputGroup>
                <InputGroup>
                    <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                        <FormLabel>Mensagem</FormLabel>
                    </Flex>
                    <Textarea
                        rows={5}
                        name="message"
                        resize={"none"}
                        width={{ base: "75%", lg: "40%" }}
                    />
                </InputGroup>
                <Flex justifyContent={"flex-end"} width={{ lg: "70%" }}>
                    <Button>Enviar</Button>
                </Flex>
            </Stack>
            <Box width={{ base: "0", lg: "25%" }}></Box>
        </>
    );
}
