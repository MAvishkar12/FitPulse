import { useState } from "react"
import { Box } from "@mui/material"
import HeroBanner from "../components/HeroBanner"
import SearchExercise from "../components/SearchExercise"
import Exercises from "../components/Exercises"
function Home() {
  const [exerciseList, setExerciseList] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  return (
   <Box>
      <HeroBanner/>
      <SearchExercise 
      exerciseList={exerciseList}
      bodyPart={bodyPart} 
      setExerciseList={setExerciseList} 
       setBodyPart={setBodyPart} />

      <Exercises  
      exerciseList={exerciseList}
      bodyPart={bodyPart} 
      setExerciseList={setExerciseList} 
       setBodyPart={setBodyPart} />
      
   </Box>
  )
}

export default Home