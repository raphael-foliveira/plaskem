import { Heading, Button, Flex, Box } from "@chakra-ui/react";
import { SquigglyLine } from "../UI/Assets";
import { Fruits } from "../UI/Assets";
import styled from "@emotion/styled";

const SpillingFruits = styled.div`
    position: relative;
    left: 100px;
`;

export default function MainContent() {
    return (
        <Flex wrap={"wrap"} justifyContent="space-between">
            <Flex
                maxWidth="30em"
                marginBottom="5em"
                textAlign={{ base: "center", lg: "left" }}
                justifyContent={{ base: "center" }}
                width={{ base: "100%", lg: "50%" }}
            >
                <div>
                    <Heading marginBottom="0.5em" marginTop={"100px"}>
                        Embalagens plásticas flexíveis e sustentáveis com qualidade
                    </Heading>
                    <Flex justifyContent={{ base: "center", lg: "flex-start" }}>
                        <SquigglyLine />
                    </Flex>
                    <Button marginTop="1em">Conheça nossos produtos</Button>
                </div>
            </Flex>
            <Flex textAlign="end" justifyContent="flex-end" width={{ base: "100%", lg: "50%" }}>
                <Box position={"relative"} left={{base: "0", lg: "100px"}}>
                    <Fruits />
                </Box>
            </Flex>
        </Flex>
    );
}
