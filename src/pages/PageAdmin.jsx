import { useContext } from "react"
import Form from "../components/admin/Form"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom";

const PageAdmin = () => {
    const { state } = useContext(UserContext);

  return (
    <div className="container">
    {
        state.isAuthenticated ? (
            <Form/>
        ): (
            <Navigate to={'/'}/>
        )
    }
        
    </div>
  )
}

export default PageAdmin