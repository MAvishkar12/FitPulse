import { Box,Stack,Typography ,Button} from "@mui/material"
import HorizontalScroll from "./HorizontalScroll"
import Loader from "./Loader";
function SimilarExercise({equipmentExercise,targetExercise}) {
    console.log("Similar exercise",targetExercise);
    
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}> 
       <Typography variant="h3">Exercises that target the Same muscle group</Typography>
          <Stack overflow="auto" display="flex" direction="row" gap={4} sx={{p:'20px',position:"relative"}}>
            { targetExercise.length ? targetExercise.map((exercise)=>(
             <Box className="exercise-card"  key={exercise.id} >
             
             <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
             <Stack direction="row">
                <Button sx={{ml:"21px",color:"#ffffff" ,background:"#FFa9a9",fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                     {exercise.bodyPart}
                </Button>
                <Button sx={{ml:"21px",color:"#ffffff" ,background:"#Fcc757",fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                     {exercise.target}
                </Button>
             </Stack>
             <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" textTransform="capitalize" fontSize="22px">
                {exercise.name}
             </Typography>
      
                 </Box>

            )):<Loader/>}
        
          </Stack>

          <Typography variant="h3">Exercises that uses same equipment</Typography>
          <Stack overflow="auto" display="flex" direction="row" gap={4} sx={{p:'20px',position:"relative"}}>
            {equipmentExercise.length ? equipmentExercise.map((exercise)=>(
             <Box className="exercise-card"  key={exercise.id} >
             
             <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
             <Stack direction="row">
                <Button sx={{ml:"21px",color:"#ffffff" ,background:"#FFa9a9",fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                     {exercise.bodyPart}
                </Button>
                <Button sx={{ml:"21px",color:"#ffffff" ,background:"#Fcc757",fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>
                     {exercise.target}
                </Button>
             </Stack>
             <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" textTransform="capitalize" fontSize="22px">
                {exercise.name}
             </Typography>
      
                 </Box>

            )):<Loader/>}
        
          </Stack>
    </Box>
  )
}

export default SimilarExercise