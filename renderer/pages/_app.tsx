import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Loader } from "../components";
import "../styles/global.css";
import dynamic from "next/dynamic";
import Global from "../Layouts/Global";

const TitleBar = dynamic(() => import("../components/TitleBar"), {
  ssr: false,
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      {/* <TitleBar /> */}
      <Head>
        <title>MSS APP</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          focusRing: "never",
          // defaultRadius: 999,
          activeStyles: {
            transform: "scale(0.99)",
          },
          colors: {
            danger: ["#bb2124"],
            warning: ["#f0ad4e"],
            info: ["#5bc0de"],
            success: ["#22bb33"],
            // my colors
            "primary-light": ["#d3eae3", "#71bca4"],
            primary: ["#2c9a76"],
            "primary-dark": ["#146c51", "#145840", "#040907"],
          },
          components: {
            Button: {
              defaultProps: {
                radius: "xl",
              },
            },
            TextInput: {
              defaultProps: {
                radius: "xl",
              },
            },
            PasswordInput: {
              defaultProps: {
                radius: "xl",
              },
            },
          },
        }}
      >
        <Loader />
        <Global>
          <Component {...pageProps} />
        </Global>
      </MantineProvider>
    </>
  );
}
