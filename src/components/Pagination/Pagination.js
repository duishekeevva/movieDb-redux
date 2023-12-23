import React, {useState} from 'react';
import {Pagination as MuiPagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";


const Pagination = ({onClick}) => {
    const [pageParam]=useSearchParams('page')
    const [active, setActive]=useState(+pageParam.get('page')|| 1)

    const handleChange=(e) => {
        setActive(Number(e))
        onClick(Number(e))
    }
    return (
        <div>
            <MuiPagination
                color={"primary"}
                sx=
                    {{
                    display:'flex',
                    justifyContent: 'center',
                    marginTop: '20px'
                    }}
                count={10} shape="rounded"
                onChange={(e)=>handleChange(+e.target.textContent)} />
        </div>
    );
};

export default Pagination;