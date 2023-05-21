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

export default function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        width: "100vw",
        height: "100vh",
        borderTop: 1,
        borderColor: "green",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center"

      }}
    >
     {/* This component wraps the picture and Aboutus content */}
        <Paper
          sx={{
            display: "grid",
            margin: "auto",
            gap: 5,
            gridTemplateColumns: "repeat(2, 1fr)",
            width: "80%",
            padding: 5,
            border: 1,
            borderColor: "red",
            backgroundColor: "silver"
            
          }}
        >
          {/* box component to hold picture */}
          <Box>
            <img
              src="https://placekitten.com/g/500/400"
              alt="Profile-Pic"
              style={{ borderRadius: "10px" }}
            />
          </Box>
          {/* box component to hold aboutus content */}
          <Paper elevation={11} sx={{backgroundColor: "#272727",  border: "2px solid white",}}>
            <Card
              sx={{
                Width: "100rem",
                backgroundColor: "inherit",
                color: "gold",
               
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  alignCenter
                >
                  About Grand Tourer
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque beatae eligendi facilis ipsam impedit maiores eos
                  repudiandae distinctio vel sint voluptates, necessitatibus
                  repellendus eum aperiam modi delectus natus eaque repellat?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque beatae eligendi facilis ipsam impedit maiores eos
                  repudiandae distinctio vel sint voluptates, necessitatibus
                  repellendus eum aperiam modi delectus natus eaque repellat?
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Paper>
      
    </Box>
  );
}
