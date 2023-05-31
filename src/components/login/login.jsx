import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Logo from '../../images/AopS_Online_Logos_AOPS Online Cube.png';
// import Logo from '../../images/AoPS_Online.png';

const Login = () => {
  return(
    <Container maxwidth="sm" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      // background: "blue"
      }}>
      <Box sx={{
        display: "flex",
        width: "80%",
        // background: "red",
        justifyContent: "center"
      }}>
        <img src={Logo} alt="AoPS Online Logo" style={{width: "80%"}}/>
      </Box>
      <Box sx={{
          display: "flex",
          width: "100%",
          // background: "purple",
          justifyContent: "center"
        }}>
          <Typography variant="h1" sx={{margin: "1rem", color: "#1B365D", fontSize:"2rem"}}>
            Online Staff Scheduling
          </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        width: "80%",
        // background: "yellow"
      }}>
        <Box sx={{
          width: "70%",
        }}>
          <TextField name="username" variant="filled" label="Username" sx={{
          width: "80%",
          float: "right"
        }}/>
        </Box>
        <Box sx={{width: "30%"}}>
          <Button variant="contained" sx={{
          height: "100%",
          ml: "10px",
          background: "#D1D3D4",
          color: "#1B365D",
          width: "50%",
          float: "left",
          ":hover": {
            bgcolor: "primary",
            color: "white"
          }
        }}>Enter Site</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login;