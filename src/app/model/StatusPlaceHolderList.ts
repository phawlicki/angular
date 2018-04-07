import {Deserializable} from "./deserializable.model";

export class StatusPlaceHolderList implements Deserializable<StatusPlaceHolderList> {
  studentId: number;
  taksId: number;
  status: any;


  deserialize(input: any): StatusPlaceHolderList {
    Object.assign(this, input);
    return this;

  }

  getStudentId() {
    return this.studentId;
  }
  
}
