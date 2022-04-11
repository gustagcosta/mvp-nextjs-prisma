import Head from "next/head";
export default function ErrorLayout() {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-center mt-4">
          <h3>Error</h3>
          <p>
            A página que você está procurando não existe ou ocorreu algum erro
            desconhecido.
          </p>
        </div>
      </main>
    </>
  );
}
