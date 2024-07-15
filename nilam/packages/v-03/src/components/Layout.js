import Head from 'next/head'
export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
            </Head>

                {children}
        </div>
    )
}
Layout.defaultProps = {
    title: "Nilam - Domain For Sell and Auction Template",
    description: 'NextJS template for domain auction',
    keywords: 'domain, auction, hosting, nextjs, react, tailwind'
}