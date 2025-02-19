import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchdata, exerciseOptions } from "../utils/fetchdata";
import Describtion from "../components/Describtion";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercise from "../components/SimilarExercise";
import { Box } from "@mui/material";

function ExerciseDetail() {
  const[execiseDetail,setExerciseDetail]=useState({});
  const {id}=useParams();
  const data=useParams();
  console.log(
    'data',data);
  
  
  useEffect(()=>{
        const fetchExerciseData=async ()=>{
              const exerciseDbURL='https://exercisedb.p.rapidapi.com'
              const youtubeSearchURL='https://youtube-search-and-download.p.rapidapi.com'

              const exerciseDetailData= await fetchdata(`${exerciseDbURL}/exercises/exercise/${id}`,exerciseOptions)
              setExerciseDetail(exerciseDetailData)
        }

        fetchExerciseData()
  },[id])
  return (
   <Box>
    <Describtion execiseDetail={execiseDetail} />
    <ExerciseVideo/>
    <SimilarExercise/>
   </Box>
  )
}

export default ExerciseDetail