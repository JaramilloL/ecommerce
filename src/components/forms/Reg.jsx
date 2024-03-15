import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Reg = ({ onSubmit, register, errors, getData }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingText"
          placeholder="name"
          name="firstName"
          {...register("firstName", {
            required: {
              value: true,
              message: "First Name is required",
            },
            minLength: {
              value: 5,
              message: "First Name must be at least 5 characters",
            },
            maxLength: {
              value: 55,
              message: "First Name must be at most 55 characters",
            },
          })}
        />
        <label htmlFor="floatingText">Name</label>
        <p className="text-danger text-center">{errors?.firstName?.message}</p>
      </div>
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
              message: "Email is required",
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
              message: "Password is required",
            },
          })}
        />
        <label htmlFor="floatingPassword">Password</label>
        <p className="text-danger text-center">{errors?.password?.message}</p>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <input
          type="submit"
          className="btn border-primary text-primary w-50 mt-2"
          onClick={getData}
          value={'REGISTER'}
        />
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <Link
          className="btn border-primary text-primary w-50 mt-2"
          to={'/'}
        >LOGIN</Link>
      </div>
    </form>
  )
}

export default Reg

Reg.propTypes ={
    onSubmit: PropTypes.func,
    register: PropTypes.func,
    errors: PropTypes.object,
    getData: PropTypes.func,
}