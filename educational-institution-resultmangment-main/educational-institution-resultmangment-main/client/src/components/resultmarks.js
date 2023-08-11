import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ResultMarks = ({data}) => {
  
  return (
    <div className="pb-10 w-[539px]">
      <table
        width="100%"
        border="0"
        cellPadding="3"
        cellSpacing="1"
        className="black12"
      >
        <tbody>
          <tr className="black12bold">
            <td width="19%" align="left" valign="middle" bgcolor="#AFB7BE">
              Code
            </td>
            <td width="66%" align="left" valign="middle" bgcolor="#AFB7BE">
              Subject
            </td>
            <td width="15%" align="left" valign="middle" bgcolor="#AFB7BE">
              Grade
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              101
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              BANGLA
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
             {data.map(data=> (
              data.bangla
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              107
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              ENGLISH
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            {data.map(data=> (
              data.english
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              109
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              MATHEMATICS
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
            {data.map(data=> (
              data.math
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              150
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            BANGLADESH AND GLOBAL STUDIES
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            {data.map(data=> (
              data.bangladeshandglobalstudies
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              111
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              ISLAM AND MORAL EDUCATION
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
            {data.map(data=> (
              data.religion
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              136
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              PHYSICS
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            {data.map(data=> (
              data.physics	
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              137
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              CHEMISTRY
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
            {data.map(data=> (
              data.chemistry	
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              138
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              BIOLOGY
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            {data.map(data=> (
              data.biology	
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              154
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              INFORMATION AND COMMUNICATION TECHNOLOGY
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
            {data.map(data=> (
              data.ict	
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              126
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              HIGHER MATHEMATICS
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            {data.map(data=> (
              data.highermath
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              147
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              PHYSICAL EDUCATION, HEALTH &amp; SPORTS
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
            {data.map(data=> (
              data.pehs	
             )) || <Skeleton />}
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              156
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
              CAREER EDUCATION
            </td>
            <td align="left" valign="middle" bgcolor="#DEE1E4">
            {data.map(data=> (
              data.ce	
             )) || <Skeleton />}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultMarks;
