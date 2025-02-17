import { useState, useEffect } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchdata, exerciseOptions } from "../utils/fetchdata";
import HorizontalScroll from "../components/HorizontalScroll";
function SearchExercise({setExercises,setBodyPart,bodyPart}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  
     // console.log("Search bar ",bodyPart);
      
  useEffect(() => {
    const fetchBody = async () => {
      const bodyparts = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyparts]);
     
     
      
    };
    fetchBody();
  },[]);

  const handleSearch = async () => {
    if (search) {
      const exercisedata = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1500",
        exerciseOptions
      );
      
      const searchexercises = exercisedata.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchexercises);
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know{" "}
      </Typography>
      <Box mb="72px" position={"relative"}>
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFFFFF",
            borderRadius: "40p",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScroll 
        data={bodyParts} 
        
         setBodyParts={setBodyParts}
         bodyPart={bodyPart}
         setBodyPart={setBodyPart}
         />
      </Box>
    </Stack>
  );
}

export default SearchExercise;
