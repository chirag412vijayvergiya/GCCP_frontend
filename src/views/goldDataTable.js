import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getUserData } from "./helper";
import { Button } from "@mui/material";

const columns = [
  { id: "Student Name", label: "Student Name", minWidth: 170 },
  { id: "Enrolment Status", label: "Enrolment Status", minWidth: 100 },
  {
    id: "# of GenAI Game Completed",
    label: "GenAI Game Completed",
  },
  {
    id: "# of Skill Badges Completed",
    label: "Skill Badges Completed in GCCF ",
  },
  {
    id: "# of Courses Completed",
    label: " No. of Courses Completed",
  },
  {
    id: "Total Completions of both Pathways",
    label: "Total Completions of both Pathways",
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userData, setUserData] = useState([]);
  const [rows, setRows] = useState([]);

  function createData(
    name,
    status,
    GenAItrack,
    GCCFtrack,
    coursecomplete,
    pathwaycomplete
  ) {
    //var total = parseInt(track1) + parseInt(track2);
    console.log(
      name,
      status,
      GenAItrack,
      GCCFtrack,
      coursecomplete,
      pathwaycomplete
    );
    //console.log(total);
    return [
      name,
      status,
      GenAItrack,
      GCCFtrack,
      coursecomplete,
      pathwaycomplete,
    ];
  }

  const preload = async () => {
    // await getUserData().then((data) => {
    //   pushData(data);
    //   setUserData(data);
    // });
    try {
      const data = await getUserData();
      pushData(data);
      setUserData(data);
    } catch (error) {
      // Handle error, by logging it or showing an error message.
    }
  };
  useEffect(() => {
    preload();
  }, []);

  const pushData = (userData) => {
    userData.ranks["gold"].forEach((value) => {
      rows.push(
        createData(
          value["Student Name"],
          value["Enrolment Status"],
          value["# of GenAI Game Completed"], //# of Skill Badges Completed in Track 1
          value["# of Skill Badges Completed"], //# of Skill Badges Completed in Track 2
          value["# of Courses Completed"],
          value["Total Completions of both Pathways"]
        )
      );
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  align="center"
                  key={column.id}
                  style={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log(row);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell align="center">{row[0]}</TableCell>
                    <TableCell align="center">{row[1]}</TableCell>
                    <TableCell align="center">{row[2]}</TableCell>
                    <TableCell align="center">{row[3]}</TableCell>
                    <TableCell align="center">{row[4]}</TableCell>
                    <TableCell align="center">{row[5]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
