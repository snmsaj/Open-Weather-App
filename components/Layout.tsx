import Head from "next/head";
import { ReactNode } from "react";

type ChildrenProp = {
  children: ReactNode;
};

export default function Layout({ children }: ChildrenProp) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>City Weather</title>
      </Head>
      {children}
    </>
  );
}
