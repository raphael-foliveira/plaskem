import { extendTheme, defineStyleConfig, defineStyle } from "@chakra-ui/react";

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

const pkmDefaultInput = defineStyle({
    borderColor: "pkmGreen.900",
});

const inputTheme = defineStyleConfig({
    variants: {
        pkmDefaultInput: pkmDefaultInput,
    },
    defaultProps: {
        variant: "pkmDefaultInput",
    },
});

const pkmDefaultTextArea = defineStyle({
    borderColor: "pkmGreen.900",
});

const textAreaTheme = defineStyle({
    variants: {
        pkmDefaultTextArea: pkmDefaultTextArea,
    },
    defaultProps: {
        variant: "pkmDefaultTextArea",
    },
});

const theme = extendTheme({
    colors,
    components: {
        Button: buttonTheme,
        Heading: headingTheme,
        Input: inputTheme,
        TextArea: textAreaTheme,
    },
});

export default theme;
