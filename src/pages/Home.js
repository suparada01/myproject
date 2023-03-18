import React, {useState} from 'react';
import { Box } from '@mui/system';
import Exercises from '../components/Exercises';
import SecarhExercises from '../components/SecarhExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SecarhExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises  exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}    />
    </Box>
  )
}

export default Home