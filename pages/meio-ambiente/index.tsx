import BaseLayout from "../../components/Layout/BaseLayout";
import MeioAmbienteContent from "../../components/MeioAmbienteComponents/MeioAmbienteContent";
import { CopyRight } from "../../components/UI/Assets";

export default function MeioAmbiente() {
    return (
        <>
            <BaseLayout tabTitle="Meio Ambiente">
                <MeioAmbienteContent />
                <CopyRight />
            </BaseLayout>
        </>
    );
}
