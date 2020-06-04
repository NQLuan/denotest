export class Student {
  public id: number;
  public name: string;
  public classId: number;
  public sex: boolean;
  public diemTB: number;
  public className: string;
  constructor(id?: number, name?: string, classId?: number, sex?: boolean, diemTB?: number, classname?: string) {
    this.id = id;
    this.name = name;
    this.classId = classId;
    this.sex = sex;
    this.diemTB  = diemTB;
    this.className = classname;
  }
}
