import React from 'react'
import {
    TableBody,
    TableRow,
  } from "@mui/material";
import Mobile2 from './responsive/Mobile2';

const FFMobile2 = ({jsonData, page, rowsPerPage, dataView, dataEdit}) => {
    return (
        <>
            <TableBody>
                {jsonData.response.docs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <Mobile2 row={row} dataView={dataView} dataEdit={dataEdit} />
                        </TableRow>
                    );
                })}
            </TableBody>
        </>
    )
}

export default FFMobile2