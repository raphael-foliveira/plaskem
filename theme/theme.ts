import {
    extendTheme,
    defineStyleConfig,
    defineStyle,
    createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { inputAnatomy, selectAnatomy } from "@chakra-ui/anatomy";

const colors = {
    pkmGreen: {
        50: "#beffa9",
        100: "#a8ef93",
        200: "#92d87e",
        300: "#7cc269",
        400: "#66ab55",
        500: "#519641",
        600: "#3b812e",
        700: "#246c1a",
        800: "#065803",
        900: "#004500",
    },
    pkmBlack: {
        400: "#373f41",
    },
};

const buttonTheme = defineStyleConfig({
    defaultProps: {
        colorScheme: "pkmGreen",
    },
});

const pkmDefaultHeading = defineStyle({
    color: "pkmGreen.800",
    fontSize: "36px",
});

const headingTheme = defineStyleConfig({
    variants: {
        pkmDefaultHeading: pkmDefaultHeading,
    },
    defaultProps: {
        variant: "pkmDefaultHeading",
    },
});

const pkmDefaultTextArea = defineStyle({
    outlineColor: "pkmGreen.900",
});

const textareaTheme = defineStyleConfig({
    variants: {
        pkmDefaultTextArea: pkmDefaultTextArea,
    },
    defaultProps: {
        variant: "pkmDefaultTextArea",
    },
});

const inputConfigHelpers = createMultiStyleConfigHelpers(inputAnatomy.keys);

const pkmDefaultInput = inputConfigHelpers.definePartsStyle({
    field: {
        outlineColor: "pkmGreen.900",
    },
});

const inputTheme = inputConfigHelpers.defineMultiStyleConfig({
    variants: {
        pkmDefaultInput: pkmDefaultInput,
    },
    defaultProps: {
        variant: "pkmDefaultInput",
    },
});

const selectConfigHelpers = createMultiStyleConfigHelpers(selectAnatomy.keys);

const pkmDefaultSelect = selectConfigHelpers.definePartsStyle({
    field: {
        outlineColor: "pkmGreen.900",
    },
});

const selectTheme = selectConfigHelpers.defineMultiStyleConfig({
    variants: {
        pkmDefaultSelect: pkmDefaultSelect,
    },
    defaultProps: {
        variant: "pkmDefaultSelect",
    },
});

const pkmGreenLink = defineStyle({
    color: "pkmGreen.400",
});

const pkmDefaultLink = defineStyle({
    color: "pkmBlack.400",
});

const linkTheme = defineStyleConfig({
    variants: {
        pkmGreenLink: pkmGreenLink,
        pkmDefaultLink: pkmDefaultLink,
    },
    defaultProps: {
        variant: "pkmDefaultLink",
    },
});

const theme = extendTheme({
    colors,
    components: {
        Button: buttonTheme,
        Input: inputTheme,
        Heading: headingTheme,
        Textarea: textareaTheme,
        Link: linkTheme,
        Select: selectTheme,
    },
});

export default theme;
