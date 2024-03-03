import * as React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Paper,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  Table,
  TablePagination,
} from "@mui/material";
import FFMobile from "./FFMobile";
import FFMobile2 from "./FFMobile2";
import FFTablet from "./FFTablet";
import FFDesktop from "./FFDesktop";
import TableHeader from "./shared/TableHeader";

export default function MainComponent({ jsonData }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [view, setView] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) setView("desktop");
      if (window.innerWidth <= 991 && window.innerWidth > 600)
        setView("tablet");
      if (window.innerWidth <= 600 && window.innerWidth > 450)
        setView("mobile");
      if (window.innerWidth <= 450) setView("mobile2");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const deleteItem = () => {
    // Deleting process goes here ...
  };

  const saveChanges = () => {
    // Saving process goes here ...
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleMetaDataView = (item) => {
    Swal.fire({
      title: "<strong>Metadatok</strong>",

      html: `
        <b>ID:</b> ${item.id}<br/>
        <b>Cím:</b> ${item.description_str}<br/>
        <b>Méret:</b> ${item.ow_i}x${item.oh_i}<br/>
        <b>Készítés dátuma:</b> ${item.createDate_dt}<br/>
        <b>Módosítás dátuma:</b> ${item.harvestDate_dt}<br/>
        <b>Formátum:</b> ${item.format_str}<br/>
        `,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Vissza
        `,
    });
  };

  const handlePublicDataEdit = (item) => {
    Swal.fire({
      title: "<strong>Publikus adatok módosítása</strong>",

      html: `
          <div style='width: 100%; height: fit-content; align-items: center; text-align: center;'>
            <div>
              <b>Cím:</b><br/> <input style='padding: 5px; border-radius: 10px; text-align: center; background: #F8F8F8;' type='text' value=${item.description_str} /><br/>
            </div>
            <div style='margin-top: 20px'>
              <b>Készítés dátuma:</b><br/> <input style='padding: 5px; border-radius: 10px; text-align: center; background: #F8F8F8;' type='text' value=${item.createDate_dt} /><br/>
            </div>
            <div style='margin-top: 20px'>
              <b>Ország:</b><br/> <input style='padding: 5px; border-radius: 10px; text-align: center; background: #F8F8F8;' type='text' value='Oroszország' /><br/>
            </div>
            <div style='margin-top: 20px'>
              <b>Város:</b><br/> <input style='padding: 5px; border-radius: 10px; text-align: center; background: #F8F8F8;' type='text' value='Moszkva' /><br/>
            </div>
            <div style='margin-top: 20px'>
              <b>Képszöveg:</b><br/> <input style='padding: 5px; border-radius: 10px; text-align: center; background: #F8F8F8;' type='text' value='Az amerikai Serena Williams' /><br/>
            </div>
          </div>
      `,
      showDenyButton: true,
      showCloseButton: false,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
          Mentés
        `,
      cancelButtonText: `
          Vissza
      `,
      denyButtonText: `
          Törlés
      `,
    });
  };

  return (
    <Paper
      sx={{
        width: "90%",
        overflow: "hidden",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "#8D5193",
                  color: "#fff",
                  fontSize: "18px",
                }}
              >
                <TableHeader />
              </TableCell>
            </TableRow>
          </TableHead>
          {view == "mobile" ? (
            <FFMobile
              jsonData={jsonData}
              page={page}
              rowsPerPage={rowsPerPage}
              dataView={handleMetaDataView}
              dataEdit={handlePublicDataEdit}
            />
          ) : view == "desktop" ? (
            <FFDesktop
              jsonData={jsonData}
              page={page}
              rowsPerPage={rowsPerPage}
              dataView={handleMetaDataView}
              dataEdit={handlePublicDataEdit}
            />
          ) : view == "mobile2" ? (
            <FFMobile2
              jsonData={jsonData}
              page={page}
              rowsPerPage={rowsPerPage}
              dataView={handleMetaDataView}
              dataEdit={handlePublicDataEdit}
            />
          ) : (
            <FFTablet
              jsonData={jsonData}
              page={page}
              rowsPerPage={rowsPerPage}
              dataView={handleMetaDataView}
              dataEdit={handlePublicDataEdit}
            />
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={jsonData.response.docs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
