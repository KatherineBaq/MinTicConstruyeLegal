import react, { useContext, useState,useEffect } from "react";

import Layout from "../Layout";

import Licence from "../../components/Main/Licence/Licence";
import Modal from "../../components/Main/Modal/Modal"

import contextUser from "../../context/context";
import { useForm } from "react-hook-form";



const Home = () => {
  const { user, setUser } = useContext(contextUser);
  console.log(user);
  const { register, handleSubmit, watch } = useForm();

  const [url, setUrl] = useState("http://localhost:3001/api/license/search?");
  const [data, setData] = useState([]);
  const [catastral, setCatastral] = useState("");
  const [barrio, setBarrio] = useState("");
  const [uso, setUso] = useState("");
  const [isFirts, setisFirts] = useState(false)

  const [openModal, setOpenModal] = useState(false);

  const createUrl = () => {
    console.log("si me ejecuto");
    console.log(catastral, barrio, uso);

    if (catastral.trim() !== "") {
      url === "http://localhost:3001/api/license/search?"
        ? setUrl(`${url}cedcatastrales=${catastral.replace(/ /g, "%20")}`)
        : setUrl(`${url}&cedcatastrales=${catastral.replace(/ /g, "%20")}`);
    }
    if (barrio.trim() !== "") {
      url === "http://localhost:3001/api/license/search?"
        ? setUrl(`${url}barrio_urb=${barrio.replace(/ /g, "%20")}`)
        : setUrl(`${url}&barrio_urb=${barrio.replace(/ /g, "%20")}`);
    }
    if (uso.trim() !== "") {
      url === "http://localhost:3001/api/license/search?"
        ? setUrl(`${url}uso=${uso.replace(/ /g, "%20")}`)
        : setUrl(`${url}&uso=${uso.replace(/ /g, "%20")}`);
    }

    setCatastral("");
    setBarrio("");
    setUso("");
    console.log(url);
  };

  
  useEffect(() => {
    
    if(!isFirts){
      fetch("http://localhost:3001/api/license").then((response) => response.json())
      .then((data) => setData(data));
      setisFirts(true)
    }
    if (url !== "http://localhost:3001/api/license/search?") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
        setUrl("http://localhost:3001/api/license")
    }
  }, [url]);

  const onSubmit = () => {
    createUrl();
  };

  const handleClick = (e) => {
    setOpenModal(!openModal)
  };

  console.log(data);

  return (
    <>
      <Layout>
      <form
      className="flex justify-around mt-8 max-w-5xl m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <button type="submit" className="bg-searchIcon w-8 bg-no-repeat" />
      <input
        type="text"
        {...register("catastral")}
        placeholder="Cedula catastral"
        value={catastral}
        onChange={(e) => setCatastral(e.target.value)}
        className="m-1 p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
      />
      <input
        type="text"
        {...register("barrio")}
        placeholder="Barrio"
        value={barrio}
        onChange={(e) => setBarrio(e.target.value)}
        className="m-1 p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
      />
      <input
        type="text"
        {...register("uso")}
        placeholder="Tipo de uso"
        value={uso}
        onChange={(e) => setUso(e.target.value)}
        className="m-1 p-1 pl-2 bg-gray-500 w-72 h-10 rounded-tr-md rounded-tl-md text-white border-b border-white text-base placeholder-white"
      />
      <button
        type="button"
        onClick={handleClick}
        className="bg-optionsSearch w-8 bg-no-repeat"
      />

    {openModal ? <Modal  className=""/>: ""}
    </form>
        <section>
         {data.slice(0,30).map((licencia)=>{
           return<Licence licencia={licencia} key={licencia.cedcatastrales}/>
         })}
        </section>
      </Layout>
    </>
  );
};

export default Home;
