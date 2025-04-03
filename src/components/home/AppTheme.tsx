import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/globalStore";
import { createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Button, CardContent, TextField } from "@mui/material";

interface AppThemeProps{
    children: React.ReactNode
}


const AppTheme = (props: AppThemeProps)=>{
    const theme = useSelector((state:RootState) => state.theme);

    const {children} = props;
    return (
        <div>
            {children}
        </div>
    )
}

export default AppTheme;