import { Heading, Text, Flex, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { Polyethylene, SquigglyLine } from "../UI/Assets";

export default function () {
    return (
        <Box marginBottom={"2em"}>
            <Flex wrap={"wrap"}>
                <Heading width="100%">Política de Qualidade</Heading>
                <Box width={"12em"} />
                <Flex justifyContent={"flex-end"} width="" marginTop="0.25em">
                    <SquigglyLine width="11em" />
                </Flex>
            </Flex>
            <Flex wrap="wrap">
                <Box width={{ base: "100%", lg: "50%" }} fontSize="20">
                    <Text margin={"3em 0"}>
                        A Plaskem Embalagens Ltda. se compromete a fabricar embalagens plásticas
                        flexíveis com qualidade, atendendo aos requisitos legais e buscando
                        continuamente a sustentabilidade da organização, a capacitação técnica de
                        seus colaboradores e a satisfação de seus clientes.
                    </Text>
                    <Text marginBottom={"2em"}>Temos como Objetivos:</Text>
                    <UnorderedList>
                        <ListItem>Atender aos compromissos com os clientes.</ListItem>
                        <ListItem>Agir preventivamente na redução das não conformidades.</ListItem>
                        <ListItem>Melhoria continua.</ListItem>
                        <ListItem>
                            Qualificação dos colaboradores para melhor execução das atividades,
                            desenvolvendo habilidades e competências.
                        </ListItem>
                        <ListItem>Assegurar a qualidade do produto final.</ListItem>
                    </UnorderedList>
                </Box>
                <Flex width={{ base: "100%", lg: "50%" }} padding={{base: "1em", lg: "2em"}} justifyContent="flex-end">
                    <Polyethylene width="540px" />
                </Flex>
            </Flex>
        </Box>
    );
}
