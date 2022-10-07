import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { getUserList } from '../../modules/actions.export'

const Dashboard: React.FC = () => {
  const userList = useAppSelector((state) => state.user.userList)

  const dipatch = useAppDispatch()

  useEffect(() => {
    const getUsers = async () => {
      try {
        await dipatch(getUserList()).unwrap()
        // alert('Success to get user list')
      } catch (err) {
        // alert(err)
      }
    }
    getUsers()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {
          userList?.length > 0 &&
          userList.map(user=> (
            <li key={user.id}>{user.firstName}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Dashboard