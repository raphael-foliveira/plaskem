import {
    Heading,
    Stack,
    Text,
    Input,
    Textarea,
    Box,
    Button,
    Flex,
    InputGroup,
    FormLabel,
} from "@chakra-ui/react";

export default function HomeContactForm() {
    return (
        <Flex backgroundColor="#f9fafb" width={"100%"} wrap="wrap" paddingTop="5em">
            <Box width={{ base: "10%", md: "40%" }} />
            <Stack textAlign={"end"} width={{ base: "100%", lg: "67%" }} gap={3} padding="1.5em">
                <Box textAlign={"left"} marginLeft={{ lg: "50%" }}>
                    <Heading marginBottom={4}>Entre em contato com a gente</Heading>
                    <Text marginBottom={6}>
                        Para saber mais sobre os nossos produtos, deixe uma mensagem que entraremos
                        em contato com você!
                    </Text>
                </Box>
                <InputGroup>
                    <Flex width={{ base: "20%", lg: "50%" }} justifyContent="flex-end">
                        <FormLabel>Nome</FormLabel>
                    </Flex>
                    <Input name="name" width={{ base: "80%", lg: "50%" }} />
                </InputGroup>
                <InputGroup>
                    <Flex width={{ base: "20%", lg: "50%" }} justifyContent="flex-end">
                        <FormLabel>Email</FormLabel>
                    </Flex>
                    <Input name="email" width={{ base: "80%", lg: "50%" }} />
                </InputGroup>
                <InputGroup>
                    <Flex width={{ base: "20%", lg: "50%" }} justifyContent="flex-end">
                        <FormLabel>DDD + Telefone</FormLabel>
                    </Flex>
                    <Input name="phone" width={{ base: "80%", lg: "50%" }} />
                </InputGroup>
                <InputGroup>
                    <Flex width={{ base: "20%", lg: "50%" }} justifyContent="flex-end">
                        <FormLabel>Mensagem</FormLabel>
                    </Flex>
                    <Textarea
                        rows={5}
                        name="message"
                        resize={"none"}
                        width={{ base: "80%", lg: "50%" }}
                    />
                </InputGroup>
                <Flex justifyContent={"flex-end"}>
                    <Button>Enviar</Button>
                </Flex>
            </Stack>
            <Box width={{ base: "0", lg: "25%" }}></Box>
        </Flex>
    );
}
