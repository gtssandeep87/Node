import { useContext } from "react";
import mythemeContext from "./MyThemeContext";

function ThemeButton(props) {
    const theme = useContext(mythemeContext);
    return <>
        {/* <button style={{ background: theme.background, color: theme.foreground }}>Stylized Button</button> */}
        {
            theme.arr.map(n => <button style={{ background: theme.background, color: theme.foreground }}>{n}</button>)
        }
    </>
}

export default ThemeButton;