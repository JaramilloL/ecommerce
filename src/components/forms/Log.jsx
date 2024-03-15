import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Log = ({ onSubmit, register, errors, resetPass, getData, loginGoogle }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "First Name is required",
            },
          })}
        />
        <label htmlFor="floatingInput">Email address</label>
        <p className="text-danger text-center">{errors?.email?.message}</p>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Please enter your password",
            },
          })}
        />
        <label htmlFor="floatingPassword">Password</label>
        <p className="text-danger text-center">{errors?.password?.message}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Link
          className="text-primary text-center w-50 mt-2"
          onClick={resetPass}
        >
          Forgot your password?
        </Link>
        <input
          type="submit"
          className="btn border-primary text-primary w-50 mt-2"
          onClick={getData}
          value={"LOGIN"}
        />
        <Link
          className="btn border-primary text-primary w-50 mt-2"
          to={"/register"}
        >
          SIGN UP
        </Link>

        <Link
          className="btn border-danger text-danger w-50 mt-2"
          onClick={loginGoogle}
        >
          GOOGLE
        </Link>
      </div>
      <ToastContainer autoClose={2000} />
    </form>
  )
}

export default Log

Log.propTypes = {
    onSubmit: PropTypes.func,
    register: PropTypes.func,
    errors: PropTypes.object,
    resetPass: PropTypes.func,
    getData: PropTypes.func,
    loginGoogle: PropTypes.func,
}