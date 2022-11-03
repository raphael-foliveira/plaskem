import { Flex } from "@chakra-ui/react";
import PesquisaDeSatisfacaoForm from "../../components/Forms/PesquisaDeSatisfacaoForm";
import NavBar from "../../components/Layout/NavBar";
import { CopyRight } from "../../components/UI/Assets";

export default function PesquisaDeSatisfacao() {
    return (
        <>
            <NavBar />
            <Flex
                backgroundColor="#ECFFE5"
                width={"100%"}
                wrap="wrap"
                paddingTop="5em"
                height={"1000px"}
            >
                <PesquisaDeSatisfacaoForm />
            <CopyRight/>
            </Flex>
        </>
    )
}