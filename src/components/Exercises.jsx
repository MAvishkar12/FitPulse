import { useEffect,useState } from "react"
import {Pagination} from "@mui/material";
import{ Box ,Typography,Stack}from "@mui/material"
import { fetchdata, exerciseOptions } from "../utils/fetchdata";
import ExercisesCard from "./ExercisesCard";

function Exercises({exercises,bodyPart,setExercises}) {
  const[curretnPage,setCurrentPage]=useState(1);
  const exercisePerPage=9;
  const indexoFLastExercise=curretnPage * exercisePerPage 
  const indexofFirstExercise=indexoFLastExercise-exercisePerPage;
  const curretExercise=exercises.slice(indexofFirstExercise,indexoFLastExercise)

  const paginate=(e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:"smooth"})
  }
  console.log("The exercise array inside a",exercises);
  
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'} }}
     mt="50px"
     p="20px"
    
    >
      <Typography variant="h3" mb="46px"  >
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center"
      >
        {curretExercise.map((exercise)=>(
          <ExercisesCard key={exercise.id} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length >9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisePerPage)}
              page={curretnPage}
              onChange={paginate}
              size="large"
            />
          )}
      </Stack>
          

    </Box>
  )
}

export default Exercises