import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  // Eğer sayfa bileşeninde noLayout fonksiyonu varsa layout'u kullanma
  const noLayout = (Component as any).noLayout;

  if (noLayout) {
    return(
      <>

        <Toaster position="top-right" />

        <main>
            <Component {...pageProps} />
        </main>
      
      </>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
