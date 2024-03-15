//vamos a trabajar con la libreria de react-hook-form para obtener los datos del formulario
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Log from "./Log";

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
    <Log
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      getValues={getData}
      loginGoogle={loginGoogle}
      resetPass={resetPass}
    />
  );
};

export default Login;
