import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ({ title, children }: { title: string; children: ReactNode }) {
    return (
        <Box
            backgroundColor={"rgba(190,255,169,0.28)"}
            borderRadius="16px"
            width={{ base: "100%", lg: "40%", xl: "20%" }}
            padding="1em"
            marginBottom={"2em"}
        >
            <Heading color={"black"} as="h4" fontSize={"20px"} margin={"0.5em 0 1em"}>
                {title}
            </Heading>
            <Text>{children}</Text>
        </Box>
    );
}
