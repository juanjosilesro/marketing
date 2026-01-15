import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from '../assets/profile.png'

export function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        py: { xs: 8, md: 14 },
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component={motion.h3}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              variant="h3"
            >
              Diseño gráfico & Marketing digital
            </Typography>
            <Typography color="text.secondary" mt={3} mb={4} maxWidth={480}>
              Ayudo a marcas y emprendedoras a comunicar su esencia a través de
              diseño visual estratégico y marketing digital.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Ver portafolio
            </Button>
          </Grid>

          <Grid item xs={12} md={6} textAlign="center">
            <Avatar
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={profilePic}
              alt="Diseñadora gráfica"
              sx={{
                width: { xs: 240, md: 320 },
                height: { xs: 240, md: 320 },
                mx: "auto",
                boxShadow: 6,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
