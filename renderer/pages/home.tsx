import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <Button onClick={() => router.push("/authentication")}>Settings</Button>
      </div>
    </React.Fragment>
  );
}

export default Home;
