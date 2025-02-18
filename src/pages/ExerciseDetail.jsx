import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchdata, exerciseOptions } from "../utils/fetchdata";
import Describtion from "../components/Describtion";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercise from "../components/SimilarExercise";
import { Box } from "@mui/material";

function ExerciseDetail() {
  const[execiseDetail,setExerciseDetail]=useState({});
  const {id}=useParams()
  useEffect(()=>{
        const fetchExerciseData=async ()=>{
              const exerciseDbURL='https://exercisedb.p.rapidapi.com'
              const youtubeSearchURL='https://youtube-search-and-download.p.rapidapi.com'

              const exerciseDetailData= await fetchdata(`${exerciseDbURL}/exercises/${id}`,exerciseOptions)
        }

        fetchExerciseData()
  },[id])
  return (
   <Box>
    <Describtion/>
    <ExerciseVideo/>
    <SimilarExercise/>
   </Box>
  )
}

export default ExerciseDetail