import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import squigglyCircle from "../../public/drawings/squigglyCircle.png";
import { SquigglyArrow } from "../UI/Assets";

export default function () {
    return (
        <>
            <Flex wrap="wrap">
                <Box
                    width={{ base: "100%", lg: "50%" }}
                    padding={"2.5em 2.5em 4em"}
                    backgroundImage={squigglyCircle.src}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"250px auto"}
                    position="relative"
                    right={"2.5em"}
                >
                    <Heading as="h1">A empresa</Heading>
                </Box>
                <Flex
                    width="50%"
                    justifyContent={"flex-end"}
                    display={{ base: "none", lg: "flex" }}
                >
                    <SquigglyArrow />
                </Flex>
                <Box width={{ base: "100%", lg: "50%" }}>
                    <Text>
                        A Plaskem Embalagens Ltda., no formato que se encontra hoje, foi fundada em
                        2002 pelo engenheiro químico Augusto Nunes. Dotado de personalidade firme e
                        arrojada, Nunes construiu uma carreira sólida, contribuindo para a
                        consolidação da Plaskem no mercado como uma empresa consistente, sendo
                        referência na produção de embalagens flexíveis. São raras as pessoas no ramo
                        que desconhecem a Plaskem.
                    </Text>
                    <br />
                    <Text>
                        A indústria,localizada na cidade de Lauro de Freitas, região metropolitana
                        de Salvador/BA, se tornou uma empresa tradicional no ramo de embalagens
                        flexíveis, produzidas com polietileno de alta e baixa densidade. Nunes
                        iniciou sua carreira empreendedora há mais de 25 anos ao adquirir duas
                        máquinas antigas. Ao longo dos anos, se especializou e modernizou o processo
                        produtivo da sua empresa, culminando no que hoje é a Plaskem, que conta com
                        mais de 80 funcionários. A empresa possui significativa confiabilidade do
                        mercado, além de possuir portfólio amplo de produtos, sempre prezando por
                        qualidade e eficiência. Com perfil pioneiro, a empresa busca constantemente
                        desenvolver novas embalagens, contribuindo para aperfeiçoar a matriz
                        industrial da Bahia e melhor atender seus clientes, se pautando em
                        tecnologia e inovação.
                    </Text>
                    <br />
                    <Text>
                        Sem deixar a competitividade, a exigência e um elevado padrão de lado, a
                        prioridade da Plaskem é a satisfação de seus clientes, além do incentivo aos
                        seus colaboradores. A empresa reconhece que o seu avanço depende diretamente
                        da qualificação e aperfeiçoamento dos seus funcionários, e, por isso, preza
                        pelo desenvolvimento individual e profissional de cada um. A Plaskem
                        valoriza um ambiente seguro e saudável, respeitando as normas estabelecidas
                        por lei, além de buscar manter qualidade e sustentabilidade em todo o seu
                        processo produtivo.
                    </Text>
                </Box>
            </Flex>
        </>
    );
}
