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
import ContactForm from "../Forms/ContactForm";

export default function HomeContactForm() {
    return (
        <Flex backgroundColor="#f9fafb" width={"100%"} wrap="wrap" paddingTop="5em">
            <ContactForm /> 
        </Flex>
    );
}
