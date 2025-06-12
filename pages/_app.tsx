import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import AdminLayout from "@/components/layout/adminLayout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  // Eğer sayfa bileşeninde noLayout fonksiyonu varsa layout'u kullanma
  const noLayout = (Component as any).noLayout;
  const isAdminPage = (Component as any).isAdminPage;

  if( isAdminPage ) {
    return (
      <>
        <Toaster position="top-right" />
        <main className="flex min-h-screen bg-background">
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>  
        </main>
      </>
    );
  }

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
