import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import  Box  from "@mui/material/Box";
import corolla from '../static/Pasi-Corolla-Hybrid.jpg'
import Container  from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function AboutUs(){
  return (
    <Box sx={{backgroundColor:"black"}}>
    <Paper sx={{
      boxShadow: '0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)',
    }}>
      <Box sx={{display:"grid", margin:"auto", gap:3, gridTemplateColumns:"repeat(2, 1fr)", width:"50rem", paddingY:2}}>
        <Box>
      <img src="https://placekitten.com/g/500/400" alt="Profile-Pic" style={{borderRadius:"10px"}} />
      </Box>
      <Box>
      <Card sx={{ Width: "100rem", backgroundColor:"#272727", color:"gold", border:"2px solid white" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" alignCenter>
          About Grand Tourer
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque beatae eligendi facilis ipsam impedit maiores eos repudiandae distinctio vel sint voluptates, necessitatibus repellendus eum aperiam modi delectus natus eaque repellat?
        </Typography>
      </CardContent>
    </Card>
    </Box>
      </Box>
    
  </Paper>
  </Box>
  )
}
