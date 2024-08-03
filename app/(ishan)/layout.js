"use client";

import Head from "next/head";
const Layout = ({ children, title="Ishan Jain" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main className="grid" >{children}</main>
            <style jsx global>{`
                section{
                    width: 80%;
                    display: grid;
                    justify-self: center;
                }
                section > span:first-child {
                display: grid;
                place-items: center;
                margin-bottom: 1rem;
                }
                section > span:first-child h1 {
                font-size: 1.5rem;
                font-weight: bold;
                color: #333;
                }
            `}
            </style>
        </>
    );
}

export default Layout;