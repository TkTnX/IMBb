"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-family)',
    }
});

export default theme