import Head from "next/head";
export default function ErrorLayout() {
  return (
    <>
      <Head>
        <title>Error</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={"/profile.png"}
              width="48"
              height="48"
              style={{ borderRadius: "5px", border: "1px solid white" }}
            />
          </a>
        </div>
      </nav> */}
      <main>
        <div className="text-center mt-4">
          <h3>Error</h3>
          <p>
            A página que você está procurando não existe ou ocorreu outro erro.
          </p>
        </div>
      </main>
    </>
  );
}
