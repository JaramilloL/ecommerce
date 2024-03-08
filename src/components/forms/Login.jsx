//vamos a trabajar con la libreria de react-hook-form para obtener los datos del formulario
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigatePage = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    try {
      console.log(data);
      navigatePage("/dashboard");
    } catch (error) {
      console.log(error);
    }

    reset();
  });

  const getData = () => {
    const newEmail = getValues("email");
    console.log(newEmail);
  };

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

export default Login;
