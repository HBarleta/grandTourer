import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import corolla from '../static/Pasi-Corolla-Hybrid.jpg'

export default function Vehicle(){
  return (
        <Paper elevation={11}>
      <Card sx={{ Width: "100rem" }}>
        <CardMedia
          sx={{ width:"100vw",height: "100vh" }}
          image={corolla}
          title="Homepage Cover Photo"
        />

        <CardContent
          sx={{
            marginY: 35,
            height: "80%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" alignCenter>
            Grand Tourer
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            consequatur, in dolor eaque fugiat quos eum labore iusto error,
            autem ut quasi optio quibusdam amet at sequi voluptatibus fugit
            libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem consequatur, in dolor eaque fugiat quos eum labore iusto
            error, autem ut quasi optio quibusdam amet at sequi voluptatibus
            fugit libero!Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Dolorem consequatur, in dolor eaque fugiat quos eum labore
            iusto error, autem ut quasi optio quibusdam amet at sequi
            voluptatibus fugit libero!
          </Typography>
        </CardContent>
      </Card>
    </Paper> 
  
  )
}
