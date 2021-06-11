import Head from 'next/head'

export default function PageHeading ({ title }) {
    return (
        <Head>
            <title>
                { title }
            </title>
        </Head>
    )
}
