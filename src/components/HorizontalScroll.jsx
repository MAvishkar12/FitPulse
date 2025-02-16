import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart";

function HorizontalScroll({ data, setBodyParts, bodyPart, setBodyPart }) {
  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      {data.map((item) => (
        <Box key={item.id || item} m="0 40px">
          <BodyPart
            item={item}
            setBodyParts={setBodyParts}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      ))}
    </div>
  );
}

export default HorizontalScroll;
