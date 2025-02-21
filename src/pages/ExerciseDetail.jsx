import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchdata, exerciseOptions, youtubeOptions } from "../utils/fetchdata";
import Describtion from "../components/Describtion";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercise from "../components/SimilarExercise";
import { Box } from "@mui/material";

function ExerciseDetail() {
  const [execiseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetExercise, setTargetExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbURL = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchURL =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchdata(
        `${exerciseDbURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchdata(
        `${youtubeSearchURL}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExcersie = await fetchdata(
        `${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetExercise(targetMuscleExcersie);

      const equipmentExercise = await fetchdata(
        `${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );

      setEquipmentExercise(equipmentExercise);
    };

    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Describtion execiseDetail={execiseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={execiseDetail.name}
      />
      <SimilarExercise
        targetExercise={targetExercise}
        equipmentExercise={equipmentExercise}
      />
    </Box>
  );
}

export default ExerciseDetail;
