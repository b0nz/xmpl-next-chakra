import { FC } from 'react'
import Head from 'next/head'
import AdminLayout from '../../../../components/Layout/Admin'

const Users: FC = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <AdminLayout>
        <div>users</div>
      </AdminLayout>
    </>
  )
}

export default Users
