import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Reg from "./Reg";

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
    <Reg onSubmit={onSubmit} register={register} errors={errors} getData={getData} />
  );
};

export default Register;
