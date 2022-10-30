import BaseLayout from "../../components/Layout/BaseLayout";
import MainText from "../../components/EmpresaComponents/MainText";
import CompanyStatus from "../../components/EmpresaComponents/CompanyStatus";
import { CopyRight } from "../../components/UI/Assets";

export default function Empresa() {
    return (
        <>
            <BaseLayout tabTitle="Empresa">
                <MainText />
                <CompanyStatus />
            </BaseLayout>
            <CopyRight />
        </>
    );
}
