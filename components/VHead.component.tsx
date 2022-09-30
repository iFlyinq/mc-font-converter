import Head from "next/head";

export function VHead() {
    return (
        <Head>
            <title>MC Font Converter</title>
            <meta name="description" content="A website to easily get the well known special minecraft font."/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="theme-color" content="#a83632"/>
            <meta name="author" content="Wesley Breukers"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}