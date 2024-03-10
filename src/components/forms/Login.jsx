//vamos a trabajar con la libreria de react-hook-form para obtener los datos del formulario
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigatePage = useNavigate();
  const { login, loginAccess, loginWithGoogle, resetPassword } =
    useContext(UserContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.email === "user@admin.com" && data.password === "admin123") {
        loginAccess();
        navigatePage("/admin");
      }
      console.log(data);
      await login(data.email, data.password);
      loginAccess();
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

  const loginGoogle = async () => {
    try {
      await loginWithGoogle();
      loginAccess();
      navigatePage("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const resetPass = async () => {
    const email = getValues("email");

    if (!email) {
      toast.error("add your email plese");
    }
    await resetPassword(email);
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
  );
};

export default Login;
