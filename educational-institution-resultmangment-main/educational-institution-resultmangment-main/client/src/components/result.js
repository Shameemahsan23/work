import React from "react";
import ResultMarks from "./resultmarks";
import Studentdetils from "./studentdetils";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Result = ({data,isLoading}) => {
  
  return (
    <div className="w-[539px]">
      {data.length === 1 ? (
        <div>
          <div>
            {isLoading ? <Skeleton count={1}/> : <h1 className="pt-5 flex justify-center text-xl items-center font-bold">Student Details</h1>}
            {isLoading ?   <Skeleton count={5}/> : <Studentdetils data={data}/>}
          </div>
           <div className="pt-5">
           {isLoading ? <Skeleton count={1}/> : <h1 className="py-5 flex justify-center items-center text-xl font-bold">Grade Sheet</h1>}
            {isLoading ? <Skeleton count={14}/> : <ResultMarks data={data}/>  }
           </div>
        </div>
      ) : <Skeleton count={3} /> }
    </div>
  );
};

export default Result;
