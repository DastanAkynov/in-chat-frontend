import { Outlet } from 'react-router-dom'
import { Menu } from '../../components/export'

const Layuot: React.FC = () => {
  return (
    <div className="layout">
        <header>
          <Menu />
        </header>
        <main className="container">
          <Outlet />
        </main>
    </div>
  )
}

export default Layuot