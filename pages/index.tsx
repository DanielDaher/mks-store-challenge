import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS-Store-Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>
          Olá mundo
        </Title>
      </main>
    </>
  )
}
