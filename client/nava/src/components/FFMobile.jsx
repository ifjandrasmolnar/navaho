import React from 'react'
import {
    TableBody,
    TableRow,
  } from "@mui/material";
import Mobile from './responsive/Mobile';

const FFMobile = ({jsonData, page, rowsPerPage, dataView, dataEdit}) => {
    return (
        <>
            <TableBody>
                {jsonData.response.docs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <Mobile row={row} dataView={dataView} dataEdit={dataEdit} />
                        </TableRow>
                    );
                })}
            </TableBody>
        </>
    )
}

export default FFMobile