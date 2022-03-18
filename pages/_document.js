// This file allows for the hidden document to be customized

import { Html, Head, Main, NextScript } from "next/document";

// Component that allows for the hidden html headers and body to be updated
const Document = () => (
    <Html>
        <Head>
            {/* Adds Source Sans Pro and Ubuntu fonts from Google into the web-application header  */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document;