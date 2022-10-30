import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { Extruder, Lines } from "../UI/Assets";

export default function Bottom() {
    return (
        <Flex marginTop="5em" wrap={"wrap"}>
            <Box width={{base: "100%", lg: "50%"}} padding={{base: "", lg:"0 0 0 5em"}}>
                <Extruder />
            </Box>
            <Box padding="8em 1em" width={{base: "100%", lg: "50%"}}>
                <Heading textAlign="end">
                    Atuamos nas mais diversas áreas de atividades de fornecimento de sacos, sacolas
                    e bobinas
                </Heading>
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
