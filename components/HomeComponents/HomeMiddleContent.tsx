import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { Extruder, Lines } from "../UI/Assets";

export default function () {
    return (
        <Flex marginTop="5em" wrap={"wrap"} justifyContent="space-between">
            <Box width={{ base: "100%", xl: "50%" }} padding={{ base: "", xl: "0" }}>
                <Extruder />
            </Box>
            <Box padding={{base:"4em 0", xl:"8em 0"}} width={{ base: "100%", xl: "40%" }}>
                <Box>
                    <Heading textAlign="end">
                        Atuamos nas mais diversas áreas de atividades de fornecimento de sacos,
                        sacolas e bobinas
                    </Heading>
                </Box>
                <Flex justifyContent="end" marginTop="1em">
                    <Lines />
                </Flex>
                <Flex justifyContent="end" marginTop="1em">
                    <Button>Saiba mais</Button>
                </Flex>
            </Box>
        </Flex>
    );
}
