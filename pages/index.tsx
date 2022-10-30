import BaseLayout from "../components/Layout/BaseLayout";
import MainContent from "../components/HomeComponents/MainContent";
import InfoCard from "../components/HomeComponents/InfoCard";
import HomeMiddleContent from "../components/HomeComponents/HomeMiddleContent";
import HomeContactForm from "../components/HomeComponents/HomeContactForm";
import HomeBottom from "../components/HomeComponents/HomeBottom";
import { Text } from "@chakra-ui/react";
import { CopyRight } from "../components/UI/Assets";

export default function Home() {
    return (
        <>
            <BaseLayout tabTitle="Plaskem">
                <MainContent />
                <InfoCard />
                <HomeMiddleContent />
            </BaseLayout>
            <HomeContactForm />
            <HomeBottom />
            <CopyRight/>
        </>
    );
}
