import { Typography, Box } from "@mui/material";

export function SectionTitle({ title, subtitle }) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}