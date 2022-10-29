import BaseLayout from "../components/Layout/BaseLayout";
import MainContent from "../components/HomeComponents/MainContent";
import InfoCard from "../components/HomeComponents/InfoCard";
import Bottom from "../components/HomeComponents/Bottom";
import HomeContactForm from "../components/HomeComponents/HomeContactForm";
import Footer from "../components/HomeComponents/Footer";

export default function Home() {
    return (
        <>
            <BaseLayout tabTitle="Plaskem">
                <MainContent />
                <InfoCard />
                <Bottom />
            </BaseLayout>
            <HomeContactForm />
            <Footer/>
        </>
    );
}
