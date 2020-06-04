import ScoreRepository from "../repository/score.ts";
import IScore from "../models/IScore.ts";

const getScores = async () => {
  const score = await ScoreRepository.getScores();
  return score;
}

const getScoreById = async (id: string) => {
    const score = await ScoreRepository.getScoreById(id);
    return score;
  }

  const addScore = async (Score: IScore) => {
    const results = await ScoreRepository.addScore(Score);
    return results;
  }
  
  const updateScore = async (id: string, Score: IScore) => {
    const results = await ScoreRepository.updateScore(id, Score);
    return results;
  }
  
  const deleteScore = async (id: string) => {
    const results = await ScoreRepository.DeleteScore(id);
    return results;
  }

const ScoreService = {
    getScores,
    getScoreById,
    addScore,
    updateScore,
    deleteScore
  }
  
  export default ScoreService;