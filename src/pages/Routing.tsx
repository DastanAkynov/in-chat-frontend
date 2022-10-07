import { useLayoutEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import Layuot from '../app/layouts/Layuot';
import { useAppDispatch } from '../app/store/hooks';
import { refresh } from '../modules/actions.export';
import { Chat, Dashboard, Home, Login, NotFound, Register } from './export';


const Routing = () => {
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    const authUser = async () => {
      const accessToken = JSON.parse(localStorage.getItem('accessToken') as any)
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken') as any)
      if(accessToken && refreshToken) {
        dispatch(refresh(refreshToken))
      }
    }
    authUser()
  }, [])

  return (
    <Routes>
        <Route path="/">
          <Route element={<Layuot />} >
            <Route index element={<Home />}/>
            <Route path="auth">
              <Route path="registration" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="dashboard" element={<Dashboard />}/>
             <Route path="chat" element={<Chat />} />
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Route>
    </Routes>
  )
}

export default Routing;
