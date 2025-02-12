
import { Box ,Typography,Button } from '@mui/material'
import HeroBannerImg from "../assets/images/banner.png"
function HeroBanner() {
  return (
    <Box sx={{
        mt:{lg:"212px",xs:"70px"},ml:{sm:'50px'}
    }} position={'relative'} p="20px" >
        <Typography color='#FF2625' sx={{}} fontWeight={600} fontSize={26}>
            Fitness Club
        </Typography>
        <Typography fontWeight="700px" mb="23px" mt="30px" sx={{fontSize:{lg:'44px',xs:'40px'}}}>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Checkout most effective exercises
        </Typography>
        <Button variant='contained' href="#exercises" sx={{bgcolor:"#FF2625",padding:"10px"}} >
            EXPLORE EXERCISES
        </Button>
        <Typography fontWeight="600px" fontSize="200px" color='#FF2625' sx={{
            opacity:0.1,
            display:{xs:"none",lg:"block"},
           
        }}>
            Exercise
        </Typography>
        <img src={HeroBannerImg} alt="banner" className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner
