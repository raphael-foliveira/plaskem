import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { PlantInHand } from "../UI/Assets";
import squigglyCloud from "../../public/drawings/squigglyCloud.png";

export default function MeioAmbienteContent() {
    return (
        <Flex wrap="wrap" fontSize={"20px"} marginBottom={"6em"}>
            <Box width={{ base: "100%", lg: "50%" }} padding={{ base: "1em 0", lg: "0 5em 0 0" }}>
                <Box
                    paddingTop={"2em"}
                    paddingBottom={{base:"2em",lg: "4em"}}
                    paddingLeft={{lg: "4em"}}
                    backgroundImage={{ lg: squigglyCloud.src }}
                    backgroundPosition={"0% 0%"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"150px auto"}
                    position={{ lg: "relative" }}
                    right={{lg: "4em"}}
                    width="100%"
                >
                    <Heading>Meio Ambiente</Heading>
                </Box>
                <Text>
                    A Plaskem vem cumprindo o seu papel ao longo dos anos, recuperando as embalagens
                    não conformes em sua totalidade, em parceria com a Ecopel.
                </Text>
                <br />
                <Text>
                    Comprometida com o desenvolvimento sustentável em todas as suas áreas
                    operacionais, apresenta diretrizes em sua política ambiental.
                </Text>
                <br />
                <Text>
                    Treinamos e desenvolvemos nossos colaboradores através de ferramentas e métodos
                    para o uso consciente do plástico e demais resíduos.
                </Text>
                <br />
                <Text>
                    Na Plaskem a área do meio ambiente está inserida no Sistema de Gestão Integrada.
                </Text>
            </Box>
            <Flex width={{ base: "100%", lg: "50%" }}>
                <PlantInHand />
            </Flex>
        </Flex>
    );
}
