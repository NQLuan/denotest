export class Score {
  public score: number;
  public studentId: number;
  public subjectId: number;

  constructor(score?: number, studentId?: number, subjectId?: number) {
    this.score = score;
    this.studentId = studentId;
    this.subjectId = subjectId;
  }
}
