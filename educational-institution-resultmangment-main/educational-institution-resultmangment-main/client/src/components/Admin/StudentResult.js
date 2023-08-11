import React, { useState } from "react";
import axios from "axios";

const StudentResult = ({
  classn,
  year,
  section,
  roll,
  regno,
  name,
  fname,
  mname,
}) => {
  const [bangla, setBangla] = useState();
  const [english, setEnglish] = useState();
  const [math, setMath] = useState();
  const [highermath, setHighermath] = useState();
  const [ict, setIct] = useState();
  const [chemisty, setChemisty] = useState();
  const [physics, setPhysics] = useState();
  const [religion, setReligion] = useState();
  const [bangladeshandglobal, setBangladeshandglobal] = useState();
  const [biology, setBiology] = useState();
  const [pehs, setPehs] = useState();
  const [ce, setCe] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/postresult", {
        class: classn,
        year,
        section,
        roll,
        regno,
        name,
        fname,
        mname,
        bangla,
        english,
        math,
        highermath,
        ict,
        chemisty,
        physics,
        religion,
        bangladeshandglobal,
        biology,
        pehs,
        ce,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="container flex flex-col justify-center items-center py-5">
      <h1 className="flex justify-center text-4xl font-bold underline">
        Student Result Add
      </h1>

      <form className="flex justify-center items-center flex-col">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 py-10">
          <div className="">
            <h1 className="font-semibold ">Bangla:</h1>
            <input
              name="bangla"
              onChange={(e) => setBangla(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Class"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">English:</h1>
            <input
              name="english"
              onChange={(e) => setEnglish(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Year"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">Math:</h1>
            <input
              name="math"
              onChange={(e) => setMath(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Section"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">Higher Math:</h1>
            <input
              name="highermath"
              onChange={(e) => setHighermath(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Roll"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">ICT:</h1>
            <input
              name="ict"
              onChange={(e) => setIct(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Reg: No"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">Chemisty:</h1>
            <input
              name="chemisty"
              onChange={(e) => setChemisty(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Name"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">Physics:</h1>
            <input
              name="physics"
              onChange={(e) => setPhysics(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Father Name"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">Religion:</h1>
            <input
              name="religion"
              onChange={(e) => setReligion(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Mother Name"
              type="text"
            />
          </div>
          <div className="w-32">
            <h1 className="font-semibold">Bangladesh And Global Studies:</h1>
            <input
              name="bangladeshandglobal"
              onChange={(e) => setBangladeshandglobal(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Mother Name"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">Biology:</h1>
            <input
              name="biology"
              onChange={(e) => setBiology(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Mother Name"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">
              PHYSICAL EDUCATION, HEALTH & SPORTS:
            </h1>
            <input
              name="pehs"
              onChange={(e) => setPehs(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Mother Name"
              type="text"
            />
          </div>
          <div className="">
            <h1 className="font-semibold">CAREER EDUCATION:</h1>
            <input
              name="ce"
              onChange={(e) => setCe(e.target.value)}
              className=" rounded-sm px-2 py-1 outline-none border-2 w-14 "
              placeholder="Input Mother Name"
              type="text"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center px-2 border py-2 rounded bg-green-400 text-white "
        >
          Submit All Details
        </button>
      </form>
    </div>
  );
};

export default StudentResult;
