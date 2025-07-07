import BasicHeader from "../components/basic-header/BasicHeader"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <BasicHeader/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout
