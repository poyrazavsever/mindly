import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  // Eğer sayfa bileşeninde noLayout fonksiyonu varsa layout'u kullanma
  const noLayout = (Component as any).noLayout;

  if (noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
