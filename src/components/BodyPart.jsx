import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
function BodyPart({ item, setBodyParts, setBodyPart, bodyPart }) {


  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      
     
      sx={{
        borderTop: bodyPart === item ? "4px solid rgb(235, 30, 30) " :'',
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>setBodyPart(item)}
     
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{ width: "40px", height: "40px" }}
       
      ></img>
      <Typography
        fontSize="24px"
        fontWeight="74px"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
