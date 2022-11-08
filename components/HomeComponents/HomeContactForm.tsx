import {
    Flex,
} from "@chakra-ui/react";
import ContactForm from "../Forms/ContactForm";

export default function () {
    return (
        <Flex backgroundColor="#f9fafb" width={"100%"} wrap="wrap" paddingTop="5em">
            <ContactForm /> 
        </Flex>
    );
}
