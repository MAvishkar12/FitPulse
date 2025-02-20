import { Box, Typography } from "@mui/material";
import ExercisesCard from "./ExercisesCard";
import BodyPart from "./BodyPart";

function HorizontalScroll({ data, setBodyParts, bodyPart, setBodyPart ,isBodyPart}) {
  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      {data.map((item) => (
        <Box key={item.id || item} m="0 40px">
          {isBodyPart ?
          <BodyPart
            item={item}
            setBodyParts={setBodyParts}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />: <ExercisesCard exercise={data} />}
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScroll;
