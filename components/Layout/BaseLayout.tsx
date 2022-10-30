import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";

interface BaseLayoutProps {
    tabTitle: string;
    children: ReactNode;
}

export default function BaseLayout({ tabTitle="Plaskem", children }: BaseLayoutProps) {
    return (
        <>
            <Head>
                <title>{tabTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <NavBar />
            <Box padding={{base: "1em", md: "8em"}}>{children}</Box>
        </>
    );
}
