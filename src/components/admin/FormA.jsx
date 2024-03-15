import PropTypes from "prop-types";

const FormA = ({ onSubmit, loginNotAccess, register, errors, share }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex justify-content-end align-content-end align-items-end">
        <button
          className="btn border-secondary text-secondary"
          onClick={loginNotAccess}
        >
          Logout
        </button>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name..."
          name="Name"
          {...register("Name", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />
        <label htmlFor="floatingInput">Name</label>
        <p className="text-danger text-center">{errors?.Name?.message}</p>
      </div>
      <div className="d-flex justify-content-center align-content-center align-items-center">
        <button className="btn btn-primary" onClick={share}>
          Add
        </button>
      </div>
    </form>
  );
};

export default FormA;

FormA.propTypes = {
  onSubmit: PropTypes.func,
  loginNotAccess: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  share: PropTypes.func,
};
