import { Post } from "@prisma/client";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import Layout from "../../components/Layout";
import { prisma } from "../../lib/prisma";

type PostsPageProps = {
  posts: Post[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany();

  const data = posts.map((post) => {
    return {
      id: post.id,
      content: post.content,
      title: post.title,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString()
    };
  });

  return {
    props: {
      posts: data
    }
  };
};

export default function PostPage({ posts }: PostsPageProps) {
  const router = useRouter();

  return (
    <>
      <Layout title="Posts">
        <div>
          <div className="list-group">
            {posts.map((p) => {
              const createdAt = new Date(p.createdAt).toLocaleDateString();
              const updatedAt = new Date(p.updatedAt).toLocaleDateString();
              return (
                <div
                  key={p.id}
                  className="list-group-item flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{p.title}</h5>
                    <small>
                      Criado em: {createdAt} - Atualizado em: {updatedAt}
                    </small>
                  </div>
                  <div>
                    <p>
                      {p.content.substring(0, 100)}... &nbsp;
                      <Link href={`/app/posts/${p.id}`}>
                        <a className="link-primary">Ler mais</a>
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
