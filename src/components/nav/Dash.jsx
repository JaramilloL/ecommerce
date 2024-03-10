import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const Dash = () => {
  const { state, loginNotAccess, user } = useContext(UserContext);

  return (
    <div>
      {state.isAuthenticated ? (
        <div>
          Dashboard
          <button onClick={loginNotAccess}>Logout</button>
          {user && user.displayName ? (
            <div>
              <p>{user.displayName}</p>
            </div>
          ) : (
            <div>
              <p>{user.email}</p>
            </div>
          )}
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default Dash;
