import { Heading } from "@chakra-ui/react";
import BaseLayout from "../../components/Layout/BaseLayout";
import { CopyRight } from "../../components/UI/Assets";
import MainContent from "../../components/PoliticaDeQualidadeComponents/MainContent";
import Certification from "../../components/PoliticaDeQualidadeComponents/Certification";

export default function PoliticaDeQualidade() {
    return (
        <>
            <BaseLayout tabTitle="Política de Qualidade">
                <MainContent />
                <Certification />
            </BaseLayout>
            <CopyRight />
        </>
    );
}
