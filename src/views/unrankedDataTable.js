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
// var rows = [];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [userData, setUserData] = useState([]);
  const [rows, setRows] = useState([]);
  function createData(name, status, track1, track2, url) {
    var total = parseInt(track1) + parseInt(track2);
    return [name, status, track1, track2, url, total];
  }

  const preload = async () => {
    await getUserData().then((data) => {
      pushData(data);
      setUserData(data);
    });
  };
  useEffect(() => {
    preload();
  }, []);

  const pushData = (userData) => {
    userData.ranks["unranked"].forEach((value) => {
      rows.push(
        createData(
          value["Student Name"],
          value["Enrolment Status"],
          value["# of GenAI Game Completed"], //# of Skill Badges Completed in Track 1
          value["# of Skill Badges Completed"], //# of Skill Badges Completed in Track 2
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
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell>{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>{row[3]}</TableCell>
                    <TableCell>{row[5]}</TableCell>
                    <TableCell>
                      <Button href={row[4]}>View Profile</Button>
                    </TableCell>
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
