import React from 'react';

function ThemeChanger() {
    const colors = ["black", "white"];
    const textColors =["white", "black"];
    const [colorInd, setColorInd] =React.useState(0);

    function handleThemeChange() {
        setColorInd((previouscolorInd)=> (previouscolorInd + 1)% colors.length);
        
    
    }
    return (
        <div style={{backgroundColor:colors[colorInd], height: "100vh", color: textColors[colorInd]}}>
            Theme changer
            <button onClick={handleThemeChange}>Change theme</button>
        </div>
    )
}

export default ThemeChanger;