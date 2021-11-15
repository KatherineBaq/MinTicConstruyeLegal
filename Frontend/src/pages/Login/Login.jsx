import React from "react";
import imgPass from "../../assets/Contra.png";
import imgName from "../../assets/User.png";
import InputLogin from "../../components/Login/InputLogin";
import ButtonForm from "../../components/Main/Search/ButtonForm/ButtonForm";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-Login bg-bottom bg-no-repeat flex justify-center items-center text-white">
      <form className="w-1/3 h-2/3 bg-black bg-opacity-50 flex flex-col items-center  rounded-2xl">
        <h1 className=" text-3xl my-8">Login</h1>
        <InputLogin
          placeholder="Ingresa tu username..."
          textField="Username"
          img={imgName}
        />
        <InputLogin
          placeholder="Ingresa tu contraseña..."
          textField="Contraseña"
          img={imgPass}
        />
        <ButtonForm text="Entrar" />
      </form>
    </div>
  );
};

export default Login;
