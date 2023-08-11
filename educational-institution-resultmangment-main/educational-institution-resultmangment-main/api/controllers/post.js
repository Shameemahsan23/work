import { db } from "../db.js";


export const postResult = (req, res) => {
    const q = "INSERT INTO studentinfo (`class`, `year`,`section`,`roll`,`regno`,`name`,`fathername`,`mothername`,`bangla`,`english`,`math`,`highermath`,`ict`,`chemistry`,`physics`,`religion`,`bangladeshandglobalstudies`,`biology`,`pehs`,`ce`) VALUE (class = ?, year = ?, section = ?, roll = ? , regno = ?, name = ? , fathername = ? , mothername = ?, bangla = ?, english = ?, math = ?, highermath = ?, ict = ? , chemistry = ?, physics = ? , religion = ?, bangladeshandglobalstudies = ? , biology = ?, pehs = ?, ce = ? )";
    const values = [
      req.body.class,
      req.body.year,
      req.body.section,
      req.body.roll,
      req.body.regno,
      req.body.name,
      req.body.fname,
      req.body.mname,
      req.body.bangla,
      req.body.english,
      req.body.math,
      req.body.highermath,
      req.body.ict,
      req.body.chemisty,
      req.body.physics,
      req.body.religion,
      req.body.bangladeshandglobal,
      req.body.biology,
      req.body.ce,
    ];
    db.query(q, [...values], (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json(data);
    });
  };