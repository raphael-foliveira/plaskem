import { Heading, Button, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import { SquigglyLine } from "../UI/Assets";
import { Fruits } from "../UI/Assets";
import smile from "../../public/drawings/smile.png";

export default function MainContent() {
    return (
        <Flex wrap={"wrap"} justifyContent="space-between" marginTop={{ lg: "4em" }}>
            <Flex
                maxWidth="30em"
                marginBottom="5em"
                textAlign={{ base: "center", lg: "left" }}
                justifyContent={{ base: "center" }}
                width={{ base: "100%", lg: "50%" }}
            >
                <div>
                    <Box
                        paddingBottom={"1em"}
                        backgroundImage={{ lg: smile.src }}
                        backgroundRepeat={"no-repeat"}
                        backgroundSize={"20%"}
                        backgroundPosition={"75% 100%"}
                    >
                        <Heading marginTop={"3em"}>
                            Embalagens plásticas flexíveis e sustentáveis com qualidade
                        </Heading>
                    </Box>
                    <Flex justifyContent={{ base: "center", lg: "flex-start" }}>
                        <SquigglyLine width="15em" />
                    </Flex>
                    <Link href="/produtos">
                        <Button marginTop="1em">Conheça nossos produtos</Button>
                    </Link>
                </div>
            </Flex>
            <Flex textAlign="end" justifyContent="flex-end" width={{ base: "100%", lg: "50%" }}>
                <Box position={"relative"} left={{ base: "0", lg: "100px" }}>
                    <Fruits />
                </Box>
            </Flex>
        </Flex>
    );
}
