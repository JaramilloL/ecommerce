import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Navigate } from "react-router-dom";

const Dash = () => {
    const { state, loginNotAccess } = useContext(UserContext);

  return (
    <div>
        {
            state.isAuthenticated ? (
                <div>
                    Dashboard
                    <button onClick={loginNotAccess}>Logout</button>
                </div>
            ): (
                <Navigate to={'/'}/>
            )
        }
    </div>
  )
}

export default Dash