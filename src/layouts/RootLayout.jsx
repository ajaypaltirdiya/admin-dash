import { Outlet } from "react-router-dom"
import Sidebar from "../components/common/Sidebar"
import Header from "../components/common/Header"



const RootLayout = () => {
  return (
    <>
    
    <div className="container-fluid p-0">
      <div className="row">
        <Sidebar/>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Header/>
          <Outlet/>
        </main>
      </div>
    </div>
    </>
    
  )
}

export default RootLayout