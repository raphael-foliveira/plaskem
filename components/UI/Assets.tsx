import plaskemLogo from "../../public/plaskem_logo.png";
import squigglyLine from "../../public/drawings/squiggly.png";
import squigglyCircle from "../../public/drawings/squigglyCircle.png";
import fruits from "../../public/fruits.png";
import star from "../../public/drawings/star.png";
import extruder from "../../public/pictures/extruder.png";
import lines from "../../public/drawings/lines.png";
import cadastroSincronizado from "../../public/certificates/cadastroSincronizado.png";
import sefaz from "../../public/certificates/sefaz.png";
import simples from "../../public/certificates/simples.png";
import sintegra from "../../public/certificates/sintegra.png";
import polyethylene from "../../public/pictures/polyethylene.png";
import squigglyArrow from "../../public/drawings/squigglyArrow.png";
import iso9001Seal from "../../public/certificates/iso9001Seal.png";
import plantInHand from "../../public/pictures/plantInHand.png";
import { Image, Text } from "@chakra-ui/react";

export function PlaskemLogo() {
    return (
        <Image
            src={plaskemLogo.src}
            alt="Plaskem logo"
            maxHeight="70px"
            maxWidth="187px"
            height="auto"
            width="auto"
        />
    );
}

export function SquigglyLine({ width = "", height = "" }) {
    return <Image src={squigglyLine.src} alt="" width={width} height={height} />;
}
export function SquigglyCircle() {
    return <Image src={squigglyCircle.src} alt="" />;
}

export function SquigglyArrow() {
    return <Image src={squigglyArrow.src} alt="" width={"186px"} height="auto" />;
}

export function Fruits() {
    return (
        <Image
            src={fruits.src}
            alt="Sacola plástica com emblema de material reciclável com frutas dentro"
            maxWidth="auto"
            maxHeight="100%"
            width="auto"
            height="auto"
            objectFit={"contain"}
        />
    );
}

export function Polyethylene({ width = "auto", height = "auto" }) {
    return (
        <Image
            src={polyethylene.src}
            alt="Grãos de polietileno"
            width={width}
            height={height}
            objectFit="contain"
        />
    );
}

export function PlantInHand({ width = "auto", height = "auto" }) {
    return (
        <Image
            src={plantInHand.src}
            alt="Mãos segurando uma pequena planta"
            width={width}
            height={height}
            objectFit="contain"
        />
    );
}

export function Star() {
    return <Image src={star.src} alt="estrela" height="52px" width="52px" display="inline" />;
}

export function Extruder() {
    return <Image src={extruder.src} alt="extrusora" height="auto" width="585px" />;
}

export function Lines() {
    return <Image src={lines.src} alt="linhas" height="34" width="auto" />;
}

export function Iso9001Seal({ height = "auto", width = "auto" }) {
    return (
        <Image
            src={iso9001Seal.src}
            alt="Selo ISO 9001"
            objectFit={"contain"}
            height={height}
            width={width}
        />
    );
}

export function CadastroSincronizado() {
    return (
        <Image
            src={cadastroSincronizado.src}
            alt="cadastro sincronizado"
            height="67px"
            width="240px"
        />
    );
}
export function Sefaz() {
    return <Image src={sefaz.src} alt="cadastro sincronizado" height="67px" width="240px" />;
}
export function Simples() {
    return <Image src={simples.src} alt="cadastro sincronizado" height="67px" width="240px" />;
}
export function Sintegra() {
    return <Image src={sintegra.src} alt="cadastro sincronizado" height="67px" width="240px" />;
}

export function CopyRight() {
    return (
        <Text textAlign={"center"}>
            2022 Ⓒ Designed by Isabella Borges. Built by Raphael Oliveira. Todos os direitos
            reservados
        </Text>
    );
}
