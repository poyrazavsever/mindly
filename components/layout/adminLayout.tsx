import {ReactNode} from 'react'
import Sidebar from './sidebar'

const AdminLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Sidebar />
      
      <main className='pl-80 pt-24 min-h-screen bg-background'>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout