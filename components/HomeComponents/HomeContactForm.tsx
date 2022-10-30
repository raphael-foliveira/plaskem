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
            <Box width={{ base: "10%", md: "40%" }}></Box>
            <Box width={{ base: "80%", md: "50%" }}></Box>
            {/* <Box width={{ base: "10%", md: "20%" }}></Box> */}
            {/* <Stack textAlign={"end"} width="30%" lineHeight={"2"} paddingRight={"2em"}>
                <label htmlFor="name">Nome</label>
                <label htmlFor="email">Email</label>
                <label htmlFor="phone">DDD + Telefone</label>
                <label htmlFor="message">Mensagem</label>
            </Stack> */}
            <Stack
                textAlign={"end"}
                width={{ base: "100%", lg: "75%" }}
                gap={3}
                padding="1.5em"
                // justifyContent="space-between"
            >
                <Box textAlign={"left"} marginLeft={{lg:"50%"}}>
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
