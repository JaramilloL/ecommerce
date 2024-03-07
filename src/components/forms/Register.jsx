const Register = () => {
  return (
    <form>
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id="floatingText"
        placeholder="name"
        name="firstName"
      />
      <label htmlFor="floatingText">Name</label>
    </div>
    <div className="form-floating mb-3">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        name="email"
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
        name="password"
      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="d-flex justify-content-center align-item-center">
      <input type="submit" className="btn btn-primary w-50 mt-2"/>
    </div>
  </form>
  )
}

export default Register