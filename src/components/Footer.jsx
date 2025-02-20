import { Stack,Box,Typography } from "@mui/material"
import Logo from "../assets/images/Logo-1.png"

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3fe">
      <Stack gap="40px" sx={{alignItems:"center" ,paddingX:"40px",paddingTop:"40px"}}>
       <img src={Logo} alt="logo" width="200px" height="40px"></img>
       <Typography variant="h5" pb="40px" mt="20px">Made By <span color="#fff2625" > @Avishkar</span>  &2025</Typography>
      </Stack>
    </Box>
  )
}

export default Footer