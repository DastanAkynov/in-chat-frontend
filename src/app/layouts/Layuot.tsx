import { Outlet } from 'react-router-dom'
import { Header, Menu } from '../../components/export'

const Layuot: React.FC = () => {
  return (
    <div className="layout">
        <Header />
        <main className="container section">
          <Outlet />
        </main>
    </div>
  )
}

export default Layuot