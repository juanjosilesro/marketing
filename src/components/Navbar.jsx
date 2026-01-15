import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 600, color: "#1F1F1F" }}
        >
          Estudio Creativo
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button sx={{ color: "#1F1F1F" }}>Inicio</Button>
          <Button sx={{ color: "#1F1F1F" }}>Servicios</Button>
          <Button sx={{ color: "#1F1F1F" }}>Portafolio</Button>
          <Button sx={{ color: "#1F1F1F" }}>Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
