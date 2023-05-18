import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Vehicles = () => {
  return (
    <div>
        <h1>2023 Toyota Corolla Hybrid</h1>
        <Paper elevation={11}>
      <Card sx={{ Width: "100rem" }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://placekitten.com/g/1800/400"
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
    </div>
  )
}

export default Vehicles