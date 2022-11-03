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
    FormControl,
} from "@chakra-ui/react";
import { FormEvent } from "react";

export default function ContactForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

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
                <form action="" onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <InputGroup>
                            <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                                <FormLabel>Nome</FormLabel>
                            </Flex>
                            <Input name="name" width={{ base: "75%", lg: "40%" }} />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                                <FormLabel>Email</FormLabel>
                            </Flex>
                            <Input name="email" width={{ base: "75%", lg: "40%" }} />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <Flex width={{ base: "25%", lg: "30%" }} justifyContent="flex-end">
                                <FormLabel>DDD + Telefone</FormLabel>
                            </Flex>
                            <Input name="phone" width={{ base: "75%", lg: "40%" }} />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
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
                    </FormControl>

                    <Flex justifyContent={"flex-end"} width={{ lg: "70%" }}>
                        <Button type="submit">Enviar</Button>
                    </Flex>
                </form>
            </Stack>
            <Box width={{ base: "0", lg: "25%" }}></Box>
        </>
    );
}
