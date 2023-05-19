import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import corolla from '../static/Pasi-Corolla-Hybrid.jpg'

const Guidelines = () => {
  return (
    <div>
<Paper elevation={11}>
      <Card sx={{ Width: "100rem", backgroundColor:"#272727", color:"gold", border:"2px solid white" }}>

        <CardContent
          sx={{
            marginY: 35,
            height: "80%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" alignCenter>
            Prepaid Fuel
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque beatae eligendi facilis ipsam impedit maiores eos repudiandae distinctio vel sint voluptates, necessitatibus repellendus eum aperiam modi delectus natus eaque repellat?
          </Typography>
        </CardContent>
      </Card>
    </Paper> 

    <Paper elevation={11}>
      <Card sx={{ Width: "100rem", backgroundColor:"#272727", color:"gold", border:"2px solid white" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12597.116608574195!2d-118.31889509463662!3d34.047709092341066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b59a88442aa3%3A0xdc05666168184cb2!2sS%20Western%20Ave%2C%20Los%20Angeles%2C%20CA%2090006!5e0!3m2!1sen!2sus!4v1684520489656!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   

        <CardContent
          sx={{
            marginY: 35,
            height: "80%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" alignCenter>
            Parking Details
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque beatae eligendi facilis ipsam impedit maiores eos repudiandae distinctio vel sint voluptates, necessitatibus repellendus eum aperiam modi delectus natus eaque repellat?
          </Typography>
        </CardContent>
      </Card>
    </Paper> 

    <Paper elevation={11}>
      <Card sx={{ Width: "100rem", backgroundColor:"#272727", color:"gold", border:"2px solid white" }}>
        <CardContent
          sx={{
            marginY: 35,
            height: "80%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" alignCenter>
            Rules
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque beatae eligendi facilis ipsam impedit maiores eos repudiandae distinctio vel sint voluptates, necessitatibus repellendus eum aperiam modi delectus natus eaque repellat?
          </Typography>
        </CardContent>
      </Card>
    </Paper> 

    </div>
  )
}

export default Guidelines