import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import corolla from '../static/Pasi-Corolla-Hybrid.jpg'
import { vehicles } from "../constants/info";

const VehicleCard=({vehicle})=>(
<Paper elevation={11}>
      <Card sx={{ Width: "100rem", backgroundColor:"#272727", color:"gold" }}>
        <CardMedia
          sx={{ width:"100vw",height: "100vh" }}
          image={vehicle.image}
          title="Homepage Cover Photo"
        />

        <CardContent
          sx={{
            marginY: 35,
            height: "80%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" alignCenter>
            {vehicle.title}
          </Typography>
          <Typography variant="body1">
            {vehicle.description}
          </Typography>
        </CardContent>
      </Card>
    </Paper> 
  
)
export default function Vehicle(){
  return (
    <>
    {vehicles.map((vehicle, index)=>(
      <VehicleCard key={index} vehicle={vehicle}/>
    
    )
    )
  
    }
    </>
  
  )
}
