//este es el formuario para gregar contenidoa la base de datos de firestore

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import FormA from "./FormA";

const Form = () => {
  //asignamos el estado de logeo del usuario medinate el contexto
  const { loginNotAccess } = useContext(UserContext);

  //usando el hoook de react-hook-form realizaremos la estraccion de datos del formulario
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
    } catch (error) {
      console.log(error);
    }
    reset();
  });

  const share = () => {
    const name = getValues("Name");
    console.log(name);
  };

  return (
    <FormA onSubmit={onSubmit} loginNotAccess={loginNotAccess} register={register} errors={errors} share={share}/>
  );
};

export default Form;
