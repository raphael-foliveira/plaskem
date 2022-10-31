import BaseLayout from "../../components/Layout/BaseLayout";
import MainContent from "../../components/ProdutosComponents/MainContent";
import { CopyRight } from "../../components/UI/Assets";

export default function Produtos() {
    return (
        <>
            <BaseLayout tabTitle="Produtos">
                <MainContent />
            </BaseLayout>
            <CopyRight />
        </>
    );
}
