import {ReactNode} from 'react'
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-5xl container mx-auto flex flex-col min-h-screen font-nunito">

        <Navbar />

        <main className='flex-grow'>{children}</main>

        <Footer />
        
    </div>
  )
}

export default Layout