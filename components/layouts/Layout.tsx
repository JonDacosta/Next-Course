import { FC } from 'react';
import Head from 'next/head'
import { Navbar } from '../ui/Navbar';

interface Props {
    title?: string;
}


export const Layout: FC<Props>= ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jonatan D" />
        <meta name="description" content={ `Información sobre el pokemon ${ title }` } />
        <meta name="keywords" content={`${ title }, pokemon, pokedes`} />
    </Head>
    
    {/* Navbar */}
    <Navbar />
      

    <main style={{
      padding: '0px 20px',
      margin: '10px 0px'
    }}>
        { children }
    </main>

    </>
  )
};
