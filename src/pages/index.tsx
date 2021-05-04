import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado!' }: Props) {
  const bla = 'asd'

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
