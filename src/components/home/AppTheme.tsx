import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/globalStore";

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