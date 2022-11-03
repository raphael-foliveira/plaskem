import { Heading, Text, Flex, Box } from "@chakra-ui/react";
import { Iso9001Seal } from "../UI/Assets";

export default function Certification() {
    return (
        <Box textAlign={"end"} fontSize="20">
            <Heading marginBottom={"2em"}>Certificação</Heading>
            <Flex wrap="wrap">
                <Flex
                    width={{ base: "100%", lg: "50%" }}
                    padding="2em"
                    position={"relative"}
                    bottom={{ base: "2em", lg: "4em" }}
                >
                    <Iso9001Seal />
                </Flex>
                <Box width={{ base: "100%", lg: "50%" }}>
                    <Text>
                        É com muito orgulho e satisfação que anunciamos oficialmente que SOMOS UMA
                        EMPRESA CERTIFICADA PELA ISO9001.15!
                    </Text>
                    <br />
                    <Text>
                        Nosso sistema de gestão de qualidade foi avaliado e validado pelo organismo
                        certificador. Essa validação é muito significativa para nós, pois se alinha
                        com o nosso propósito: proporcionar a máxima satisfação aos nossos clientes!
                        💚
                    </Text>
                    <br />
                    <Text>
                        A norma é reconhecida internacionalmente, e a certificação simboliza o
                        compromisso da Plaskem com a qualidade e eficiência de nossa produção! ✅
                    </Text>
                    <br />
                    <Text>
                        Essa certificação é produto de trabalho duro, esforço contínuo e dos grandes
                        desafios enfrentados por toda a nossa equipe. Nós nos orgulhamos muito de
                        todos os nossos colaboradores por terem feito esse esforço em conjunto,
                        abraçando esse objetivo! Estamos todos de parabéns! 😍
                    </Text>
                    <br />
                    <Text>
                        Estamos em constante evolução, cuidando dos mínimos detalhes, para que seu
                        produto chegue com alta qualidade!
                    </Text>
                    <br />
                    <Text>A jornada só está começando...</Text>
                </Box>
            </Flex>
        </Box>
    );
}
