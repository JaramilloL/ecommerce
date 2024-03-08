import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Register = () => {
  const navigatePage = useNavigate();
  const { signIn } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      await signIn(data.email, data.password);
      navigatePage("/");
    } catch (error) {
      console.log(error);
    }

    reset();
  });

  const getData = () => {
    const newName = getValues("firstName");
    console.log(newName);
  };

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
          className="btn btn-primary w-50 mt-2"
          onClick={getData}
        />
      </div>
    </form>
  );
};

export default Register;
