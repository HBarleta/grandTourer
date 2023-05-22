import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import corolla from "../static/Pasi-Corolla-Hybrid.jpg";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function AboutUs() {
  return (
    // component to hold background and grid items
    <Box
      sx={{
        backgroundColor: "#272727",
        alignItems: "center",
        height: "100vh",
        border: 1,
        borderColor: "green",
        display: "flex",
      }}
    >
      {/* grid item component holding content and image */}
      <Grid container alignItems={"center"} justifyContent={"space-around"}>
        {/* grid component to hold picture */}
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{ border: 1, borderColor: "white" }}
        >
          <img
            srcSet="https://placekitten.com/g/500/400 1200w"
            alt="Grand Tourer logo"
            style={{ borderRadius: "10px" }}
          />
        </Grid>
        {/* grid item component to hold aboutus content */}
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{ border: 1, borderColor: "white", padding: 1 }}
        >
          <Typography gutterBottom variant="h5" color="white">
            About Grand Tourer
          </Typography>
          <Typography variant="body1" color="white" fontSize="1em">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            beatae eligendi facilis ipsam impedit maiores eos repudiandae
            distinctio vel sint voluptates, necessitatibus repellendus eum
            aperiam modi delectus natus eaque repellat? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Neque beatae eligendi facilis
            ipsam impedit maiores eos repudiandae distinctio vel sint
            voluptates, necessitatibus repellendus eum aperiam modi delectus
            natus eaque repellat?
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
