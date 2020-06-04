import client from '../database/MySQLClient.ts';
import IScore from '../models/IScore.ts';



const getScores = async () => {
  const results = await client.execute('SELECT scores.id, scores.score, scores.studentid, scores.subjectid, subjects.name FROM scores right join subjects on scores.subjectid = subjects.id');
  return results.rows;
}

const getScoreById = async (id: string) => {
    const result = await client.execute('SELECT scores.id, scores.score, scores.studentid, scores.subjectid, subjects.name FROM scores right join subjects on scores.subjectid = subjects.id where scores.id = ' + id);
    return result.rows;
  }

 

  const addScore = async(score : IScore) => {
    const results = await client.execute(`
      INSERT INTO scores (
        Score,
        StudentId,
        SubjectId
      ) VALUES (
        ?,
        ?,
        ?
      );
    `, [score.score, score.studentId, score.subjectId]);
    
    return results;
  }
  
  
  const updateScore = async(id: string ,score : IScore) => {
    const results = await client.execute("UPDATE `scores` SET `Score`='"+score.score+"' WHERE `Id`='"+id+"';");
    return results;
  }
  
  const DeleteScore =async(id: string) => {
    const result = await client.execute('DELETE FROM Scores where id = ' + id);
    return result;
    
  }

const ScoreRepository = {
    getScores,
    getScoreById,
    addScore,
    updateScore,
    DeleteScore
  }
  export default ScoreRepository;