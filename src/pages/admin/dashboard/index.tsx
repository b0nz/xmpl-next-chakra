import Head from 'next/head'
import AdminLayout from '../../../components/Layout/Admin';

const Dashboard = () => {
  return(
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AdminLayout>
        <div>dashboards</div>
      </AdminLayout>
    </>
  );
}

export default Dashboard;