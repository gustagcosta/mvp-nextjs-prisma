import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LoadingLayout from "./LoadingLayout";

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: Props) {
  const { data: session, status } = useSession();

  async function handleSignOut() {
    signOut({ redirect: true, callbackUrl: "/" });
  }

  if (status === "loading") {
    return <LoadingLayout />;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img
              src={session.user.image}
              alt={session.user.name}
              width="48"
              height="48"
              style={{ borderRadius: "5px", border: "1px solid white" }}
            />
          </span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">{session.user.name}</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/app">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/app/posts/create">
                  <a className="nav-link">New Post</a>
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  style={{ cursor: "pointer" }}
                  onClick={handleSignOut}>
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container-fluid mt-2">{children}</main>
    </>
  );
}
