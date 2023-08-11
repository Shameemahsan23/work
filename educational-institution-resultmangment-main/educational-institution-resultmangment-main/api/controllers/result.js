import { db } from "../db.js";
// export const getResult = (req, res) => {
//   const q = "SELECT `class` = ?,`year` = ?,`section` = ?,`roll` = ?,`regno`= ? FROM studentinfo"

//   const values = [
//     req.body.class,
//     req.body.year,
//     req.body.section,
//     req.body.roll,
//     req.body.reg,
//   ];

//   db.query(q, [...values], (err, data) => {
//     if (err) return res.status(500).send(err);
//     return res.status(200).json(data);
//   });
// };

export const getResult = (req, res) => {
  const q = "SELECT * FROM studentinfo WHERE class= ? AND year = ? AND section = ? AND roll = ? AND regno = ? "
  const values = [
    req.body.class,
    req.body.year,
    req.body.section,
    req.body.roll,
    req.body.regno,
  ];
  db.query(q, [...values], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};
