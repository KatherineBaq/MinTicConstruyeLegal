import React, { useStat, useContext } from "react";
import imgPass from "../../assets/Contra.png";
import imgName from "../../assets/User.png";
import InputLogin from "../../components/Login/InputLogin";
import ButtonForm from "../../components/Main/Search/ButtonForm/ButtonForm";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import contextUser from "../../context/context";

const Login = () => {
  const { user, setUser } = useContext(contextUser);

  const { register, handleSubmit } = useForm();
  //"yosstincode@gmail.com", "12345ABCD"

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/administrador/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });
  // }, [input]);

  const onSubmit = (data) => {
    console.log(data, "data");
    const { Email, Password } = data;
    setUser({ username: Email, password: Password });
    console.log(user);
  };

  return (
    <div className="w-screen h-screen bg-Login bg-bottom bg-no-repeat flex justify-center items-center text-white">
      <Link to="/">
        <h1 className="absolute p-4 top-0 left-0 text-2xl underline">Salir</h1>
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 h-2/3 bg-black bg-opacity-50 flex flex-col items-center  rounded-2xl"
      >
        <h1 className=" text-3xl my-8">Login</h1>
        <InputLogin
          type="text"
          label="Email"
          register={register}
          placeholder="Ingresa tu Email..."
          textField="Email"
          img={imgName}
        />
        <InputLogin
          type="password"
          label="Password"
          register={register}
          placeholder="Ingresa tu contraseña..."
          textField="Contraseña"
          img={imgPass}
        />
        {Object.keys(user) !== 0 ? (
          <Link to="/">
            <ButtonForm text="Entrar" />
          </Link>
        ) : (
          <Link to="#">
            <ButtonForm text="Entrar" />
          </Link>
        )}
      </form>
    </div>
  );
};

export default Login;
