import { Score } from '../score/score.model';

export class StudentForAdd {
  public name: string;
  public sex: boolean;
  public classId: number;
  //public scores: Score[];
  constructor(name?: string, sex?: boolean, classId?: number) {
    this.name = name;
    this.sex = sex;
    this.classId = classId;
    //this.scores = scores;
  }
}
