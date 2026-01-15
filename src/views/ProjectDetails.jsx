import { useParams } from "react-router-dom";
import { projects } from "../assets/projectsData";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

export function ProjectDetails() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography>Proyecto no encontrado</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box mb={6}>
        <Typography variant="h3" fontWeight={600} gutterBottom>
          {project.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={720}
        >
          {project.description}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {project.images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              sx={{
                overflow: "hidden",
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`${project.title} ${index + 1}`}
                sx={{
                  width: "250px",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
