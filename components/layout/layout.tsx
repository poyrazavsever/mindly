import { ReactNode } from 'react'
import Navbar from './navbar';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-5xl container mx-auto flex flex-col min-h-screen">

      <Toaster position="top-right" />

      <Navbar />

      <main className='flex-grow'>{children}</main>

      <Footer />

    </div>
  )
}

export default Layout