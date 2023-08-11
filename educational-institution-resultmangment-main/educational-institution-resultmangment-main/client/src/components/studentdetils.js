import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
const Studentdetils = ({ data }) => {
  return (
    <div className="py-5">
      <table
        width="100%"
        border="0"
        cellPadding="3"
        cellSpacing="1"
        className=""
      >
        <tbody>
          <tr>
            <td width="12%" align="left" valign="middle" bgcolor="#EEEEEE">
              Roll No:
            </td>
            <td width="27%" align="left" valign="middle" bgcolor="#EEEEEE">
              {data.map((data) => data.roll) }
            </td>
            <td width="22%" align="left" valign="middle" bgcolor="#EEEEEE">
              Name:
            </td>
            <td width="39%" align="left" valign="middle" bgcolor="#EEEEEE">
              {data.map((data) => data.name.toUpperCase()) }
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Class:
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              {data.map((data) => data.class) }
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Father's Name:
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              {data.map((data) => data.fathername.toUpperCase()) }
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Year:
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              {data.map((data) => data.year) }
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Mother's Name:
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              {data.map((data) => data.mothername.toUpperCase()) }
            </td>
          </tr>
          <tr>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Result:
            </td>
            <td
              align="left"
              valign="middle"
              bgcolor="#EEEEEE"
              className="black12bold"
            >
              PASSED
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Institute:
            </td>
            <td align="left" valign="middle" bgcolor="#EEEEEE">
              Sunshine Academy
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Studentdetils;
