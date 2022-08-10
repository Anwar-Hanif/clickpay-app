import React from 'react'
import Header from '../layout/Header'
import Dashboard from '../pages/dashboard/Dashboard'
import AddCityModal from '../pages/area/modals/AddCityModal'
import EditCityModal from '../pages/area/modals/EditCityModal'

const Layout = () => {
  return (
    <>
      <Header/>
      <Dashboard/>
      <AddCityModal />
      <EditCityModal />
    </>
  )
}

export default Layout