import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../assets/projectsData";

export function ProjectCard({ projectId }) {
  const navigate = useNavigate();
  const project = projects[projectId];

  if (!project) return null;

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      sx={{ cursor: "pointer", width: "250px" }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.images[0]}
        alt={project.title}
      />
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {project.category}
        </Typography>
      </CardContent>
    </Card>
  );
}
