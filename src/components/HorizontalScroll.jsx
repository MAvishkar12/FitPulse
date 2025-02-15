
import { Box } from "@mui/material"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from "./BodyPart";
function HorizontalScroll({data,setExerciseList,setBodyPart,bodyPart}) {
  console.log("Data inside Horizontal",data);
  
  return (
    <ScrollMenu>
    <div>
      {data.map((item)=>(
        <Box key={item.id || item} m="0 40px">
         <BodyPart 
         item={item}
         setExerciseList={setExerciseList}
         setBodyPart={setBodyPart}
         bodyPart={bodyPart}
         />
      </Box>
    ))}
    </div>
    </ScrollMenu>
  )
}

export default HorizontalScroll