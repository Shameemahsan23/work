import React, { useState } from "react";
import axios from "axios";
import Result from './result'
import { useNavigate } from 'react-router-dom';

const ResultUi = () => {
  const [roll, setRoll] = useState();
  const [reg, setReg] = useState();
  const [classname, setClassname] = useState();
  const [year, setYear] = useState();
  const [section, setSection] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsloading(true)
    try {
      const res = await axios.post("http://localhost:8000/api/result", {
        class: classname,
        year: year,
        section: section,
        roll: roll,
        regno: reg,
      });
     setData(res.data)
    } catch (err) {
      console.log(err.response.data);
    }
   setTimeout(function(){
    setIsloading(false)
   }, 1000)
  };
  const handlerefresh = async (e) => {
    e.preventDefault();
    navigate('/');
    window.location.reload();
  }
  return (
    <>
      <div className="flex flex-col justify-center pt-20 items-center">
        <div className="flex  items-center flex-col bg-green-500 px-32 rounded-md py-3">
          <img
            className="w-[100px] rounded-full"
            src="https://www.shikkhafirst.com/sims/images/logo/468.jpg"
            alt=""
          />
          <h1 className="font-bold text-2xl text-white">
            Sunshine Academy Result
          </h1>
          <span className="text-gray-300 text-sm ">
            &copy; Official Website of Sunshine
          </span>
        </div>

        <form className="flex  flex-col border px-[125px] py-3">
          <div className="pt-5 flex-col ">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <h1 className="font-bold">ClassName:</h1>
                <select
                  onChange={(e) => setClassname(e.target.value)}
                  name="exam"
                  className="outline-none border border-gray-500 rounded-sm w-48"
                  id="exam"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Select One
                  </option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>
              <div className="flex flex-row gap-14">
                <h1 className="font-bold">Year:</h1>
                <select
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setYear(e.target.value)}
                  name="year"
                  className="outline-none border border-gray-500 rounded-sm w-48"
                  id="year"
                >
                  <option value="DEFAULT" disabled>
                    Select One
                  </option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                </select>
              </div>
              <div className="flex flex-row gap-9">
                <h1 className="font-bold">Section:</h1>
                <select
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setSection(e.target.value)}
                  name="section"
                  className="outline-none border border-gray-500 rounded-sm w-48"
                  id="section"
                >
                  <option value="DEFAULT" disabled>
                    Select One
                  </option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </select>
              </div>
            </div>
            {/* reg + roll */}
            <div className="pt-4 ">
              <div className="flex gap-16 ">
                <h1 className="font-bold">Roll:</h1>
                <input
                  name="roll"
                  type="text"
                  className="border outline-none border-gray-600 rounded-sm"
                  onChange={(e) => setRoll(e.target.value)}
                />
              </div>
              <div className="flex gap-9 pt-3">
                <h1 className="font-bold">Reg No:</h1>
                <input
                  type="text"
                  name="regno"
                  className="border outline-none border-gray-600 rounded-sm"
                  onChange={(e) => setReg(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
          <button
            className="flex justify-center text-white mt-5 px-2 py-1 rounded-md bg-green-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="flex justify-center text-white mt-5 px-2 py-1 rounded-md bg-green-500"
            onClick={handlerefresh}
          >
            Refresh
          </button>
          </div>

          <div className="text-[10px] flex justify-center">
            ©2015-{new Date().getFullYear()} <a className="font-bold text-[10px] " href="https://www.facebook.com/EyAsiN.ArAfAt.XYZ"> Eyasin Arafat</a>, All rights reserved.
          </div>
        </form>
      </div>

      <div className="container justify-center flex items-center w-full">
       {data && <Result isLoading={isLoading} data={data}/> }
      </div>
    </>
  );
};

export default ResultUi;
