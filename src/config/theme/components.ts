// src/config/theme/components.ts
import type { Components, Theme } from "@mui/material/styles";

const components = (theme: Theme): Components => ({
 
  MuiTableRow: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: theme.palette.grey[100],
        },
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: 700,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      body: {
        fontSize: "0.9rem",
        padding: "0.75rem 1rem",
      },
    },
  },

  // === 📋 Selects ===
  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: "0.5rem",
        backgroundColor: "#fff",
      },
    },
  },

  // === 🔍 Inputs ===
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: "0.95rem",
      },
    },
  },
});

export default components;
