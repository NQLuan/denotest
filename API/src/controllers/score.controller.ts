import ScoreService from "../services/score.service.ts";
import IScore from "../models/IScore.ts";

export async function getScores({ response }: { response: any }) {
  // get params and body 
  // 
  try {
    const results = await ScoreService.getScores();
    response.status = 200;
    response.body = results;
  } catch (error) {
    response.status = 400;
    response.body = { "message": "Invalid" }
  }
}


export async function getScoreById({ params, request, response }: { params: {id: string}, request: any, response: any }) {
    try {
      const result = await ScoreService.getScoreById(params.id);
      response.status = 200;
      response.body = result;
    } catch (error) {
      response.status = 400;
      response.body = { "message": "Invalid" }
    }
  }
  

  export async function addScore({ request, response }: { request: any, response: any }) {
    const body = await request.body();
    const score: IScore = body.value;
    try {
      const result = await ScoreService.addScore(score);
      response.status = 200;
      response.body = {
        "message": "OK"
      }
    } catch (error) {
      response.status = 500;
      response.body = { "message": "Invalid" }
    }
  }
  
  
  
  export async function updateScore({ params, request, response }: { params: {id: string}, request: any, response: any }) {
    const body = await request.body();
    const score: IScore = body.value;
    try {
      const result = await ScoreService.updateScore(params.id, score);
      response.status = 200;
      response.body = {
        "message": "OK"
      }
    } catch (error) {
      response.status = 500;
      response.body = { "message": "Invalid" }
    }
  }
  
  export async function deleteScore({ params, request, response }: { params: {id: string}, request: any, response: any }) {
    try {
      const result = await ScoreService.deleteScore(params.id);
      response.status = 200;
      response.body = {
        "message": "OK"
      }
    } catch (error) {
      response.status = 500;
      response.body = { "message": "Erro" }
    }
  }