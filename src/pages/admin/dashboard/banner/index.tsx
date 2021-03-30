import { FC } from 'react'
import Head from 'next/head'
import AdminLayout from '../../../../components/Layout/Admin'

const Banner: FC = () => {
  return (
    <>
      <Head>
        <title>Banner</title>
      </Head>
      <AdminLayout>
        <div>banner</div>
      </AdminLayout>
    </>
  )
}

export default Banner
