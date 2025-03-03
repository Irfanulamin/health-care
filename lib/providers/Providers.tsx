"use client";

import React from "react";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@mui/material";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

export default Providers;
