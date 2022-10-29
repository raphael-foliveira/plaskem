import plaskemLogo from "../../public/plaskem_logo.png";
import squigglyLine from "../../public/drawings/squiggly.png";
import fruits from "../../public/fruits.png";
import star from "../../public/drawings/star.png";
import extruder from "../../public/pictures/extruder.png";
import lines from "../../public/drawings/lines.png";
import { Image } from "@chakra-ui/react";

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

export function SquigglyLine() {
    return <Image src={squigglyLine.src} alt="" />;
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
