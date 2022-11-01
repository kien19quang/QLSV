import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Button, Checkbox, Box, Stack } from "@mui/material";

export interface HomeProps {}

function createData(
  Name: string,
  Dob: string,
  Major: string,
  Vaccinated: boolean
) {
  return { Name, Dob, Major, Vaccinated };
}

const rows = [createData("Vũ Quang Kiên", "MB Bank", "IT", true)];

export default function Home(props: HomeProps) {
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChangeCheckBox = (index: number) => {
    setChecked(!checked);
  };

  return (
    <Box p="20px">
      <Typography component="h2" variant="h4" textAlign="center" pb="20px">
        Bảng học sinh, sinh viên
      </Typography>

      <Button variant="contained">New Student</Button>
      <TableContainer component={Paper} sx={{ mt: "40px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="200px">STT</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Dob</TableCell>
              <TableCell align="center">Major</TableCell>
              <TableCell align="center">Vaccinated</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{row.Name}</TableCell>
                <TableCell align="center">{row.Dob}</TableCell>
                <TableCell align="center">{row.Major}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={checked}
                    onChange={() => handleChangeCheckBox(index)}
                  />
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" gap="6px" justifyContent="center">
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
