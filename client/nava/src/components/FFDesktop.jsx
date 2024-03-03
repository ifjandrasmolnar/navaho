import React from 'react'
import {
    TableBody,
    TableRow,
  } from "@mui/material";
import Desktop from './responsive/Desktop';

const FFDesktop = ({jsonData, page, rowsPerPage, dataView, dataEdit}) => {
    return (
        <>
            <TableBody>
                {jsonData.response.docs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <Desktop row={row} dataView={dataView} dataEdit={dataEdit} />
                        </TableRow>
                    );
                })}
            </TableBody>
        </>
    )
}

export default FFDesktop