import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import corolla from "../static/Pasi-Corolla-Hybrid.jpg";
import { vehicles } from "../constants/info";
import Box from "@mui/material/Box";
const VehicleCard = ({ vehicle }) => (
  <Paper elevation={11}>
    <Box
      component="img"
      srcSet={vehicle.image}
      alt="2023 Toyota Corolla Hybird"
    />
    <Card sx={{ Width: "100rem", backgroundColor: "#272727", color: "gold" }}>
      <CardContent
        sx={{
          marginY: 35,
          height: "80%",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" alignCenter>
          {vehicle.title}
        </Typography>
        <Typography variant="body1">{vehicle.description}</Typography>
      </CardContent>
    </Card>
  </Paper>
);
export default function Vehicle() {
  return (
    <>
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={index} vehicle={vehicle} />
      ))}
    </>
  );
}
