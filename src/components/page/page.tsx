import React from "react";
import Head from "next/head";
import {PageProps} from "./types";
import {PageContentWrapper, PageWrapper} from "./styles";
import Menu from "../menu/menu";
import {ThemeProvider} from "styled-components";
import {useAppState} from "../../state/app";
import {PageContentTitle} from "../../styles/helpers";
import Intro from "../intro/intro";
import RequestCv from "../request-cv/request-cv";

export default function Page({children, meta, pageContentTitle}: PageProps) {
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
                <link rel='stylesheet' type='text/css' href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"/>
            </Head>
            <ThemeProvider theme={{main: theme}}>
                <Intro />
                <PageWrapper>
                    <Menu/>
                    <PageContentWrapper>
                        <PageContentTitle dangerouslySetInnerHTML={{__html: pageContentTitle}}/>
                        {children}
                        <div style={{height: "2em"}}/>
                    </PageContentWrapper>
                    <RequestCv/>
                </PageWrapper>
            </ThemeProvider>
        </>
    );
}
