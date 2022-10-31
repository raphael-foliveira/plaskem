import { Flex, Wrap } from "@chakra-ui/react";
import ContactForm from "../../components/Forms/ContactForm";
import NavBar from "../../components/Layout/NavBar";
import { CopyRight } from "../../components/UI/Assets";

export default function FaleConosco() {
    return (
        <>
            <NavBar />
            <Flex
                backgroundColor="#ECFFE5"
                width={"100%"}
                wrap="wrap"
                paddingTop="5em"
                height={"1000px"}
            >
                <ContactForm />
            <CopyRight/>
            </Flex>
        </>
    );
}
