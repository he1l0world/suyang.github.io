import React from "react"
interface AppThemeProps{
    children: React.ReactNode
}


const AppTheme = (props: AppThemeProps)=>{

    const {children} = props;
    return (
        <div>
            {children}
        </div>
    )
}

export default AppTheme;