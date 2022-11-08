import { Heading, Flex } from "@chakra-ui/react";
import { Sefaz, Simples, Sintegra, CadastroSincronizado } from "../UI/Assets";

export default function () {
    return (
        <>
            <Heading margin={"2em 0 3em"}>Situação da empresa</Heading>
            <Flex wrap={"wrap"}>
                <Flex width={{ base: "100%", lg: "25%" }} marginBottom="1em" justifyContent={"center"}>
                    <Sintegra />
                </Flex>
                <Flex width={{ base: "100%", lg: "25%" }} marginBottom="1em" justifyContent={"center"}>
                    <Sefaz />
                </Flex>
                <Flex width={{ base: "100%", lg: "25%" }} marginBottom="1em" justifyContent={"center"}>
                    <CadastroSincronizado />
                </Flex>
                <Flex width={{ base: "100%", lg: "25%" }} marginBottom="1em" justifyContent={"center"}>
                    <Simples />
                </Flex>
            </Flex>
        </>
    );
}
