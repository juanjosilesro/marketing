import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { Header } from "../components/Header";
import { PROJECT_IDS } from "../enums/ProjectEnum";

export function Home() {
  return (
    <>
      <Header />
      <Container sx={{ py: 10 }}>
        <SectionTitle
          title="Portafolio"
          subtitle="Selección de proyectos de diseño y marketing"
        />

        <Grid container spacing={4}>
         {Object.values(PROJECT_IDS).map((projectId) => (
          <Grid item xs={12} md={4} key={projectId}>
            <ProjectCard projectId={projectId} />
          </Grid>
        ))}
        </Grid>
      </Container>
    </>
  );
}
