import React from "react";
import Head from "next/head";
import {PageProps} from "./types";
import {PageWrapper} from "./styles";
import Menu from "../menu/menu";
import {ThemeProvider} from "styled-components";
import {useAppState} from "../../state/app";

const NEXT_PUBLIC_GOOGLE_API_KEY = process?.env?.NEXT_PUBLIC_GOOGLE_API_KEY;
export default function Page({children, meta}: PageProps) {
    const {theme} = useAppState();
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="keywords" content={meta.keywords}/>
                <meta property="og:image" content={meta.image}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta name="twitter:card" content="summary"/>
                <meta property="twitter:site" content="@media-zoo"/>
                <meta property="twitter:image" content={meta.image}/>
                <meta property="twitter:title" content={meta.title}/>
                <meta property="twitter:description" content={meta.description}/>
            </Head>
            <ThemeProvider theme={{main: theme}}>
                <PageWrapper>
                    <Menu/>
                    {children}
                </PageWrapper>
            </ThemeProvider>
        </>
    );
}
