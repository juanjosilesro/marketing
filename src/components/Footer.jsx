import { Box, Typography, Container } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ py: 4, mt: 10 }}>
      <Container>
        <Typography variant="body2" color="text.secondary">
          © 2025 Estudio Creativo · Diseño & Marketing Digital
        </Typography>
      </Container>
    </Box>
  );
}