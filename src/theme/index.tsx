import { createTheme } from "@mui/material";

const theme = createTheme({
    "components": {
        "MuiDivider": {
            "styleOverrides": {
                "root": {
                    "borderColor": "white",
                    "borderWidth": "0.5px",
                }
            }
        }
    },
    "typography": {
        "fontFamily": `"Inter Variable", "Roboto", "Helvetica", "Arial", "sans-serif"`
    }
});

export default theme;
