import {ReactNode} from 'react'
import Sidebar from './sidebar'

const AdminLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Sidebar />
      
      {children}
    </div>
  )
}

export default AdminLayout