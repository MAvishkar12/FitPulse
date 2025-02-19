import { Link } from "react-router-dom"
import { Button,Stack,Typography } from "@mui/material"
function ExercisesCard({exercise}) {
  
     
  return (
    <Link  className="exercise-card" to={`/exercises/${exercise.id}`}>
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
    </Link>
  )
}

export default ExercisesCard