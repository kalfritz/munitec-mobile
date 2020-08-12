export type RootStackParamList = {
  ChooseASchool: undefined;
  ChooseAClass: ChooseAClassParams;
  ChooseASubject: ChooseASubjectParams;
  StudentsDashboard: StudentsDashboardParams;
  NotFound: undefined;
};

export interface ChooseAClassParams {
  school: School;
}
export interface ChooseASubjectParams extends ChooseAClassParams {
  class: Class;
}
export interface StudentsDashboardParams extends ChooseASubjectParams {
  subject: Subject;
}
export type School = {
  id: number;
  name: string;
  image: string;
};
export type Class = {
  id: number;
  name: string;
};
export type Subject = {
  id: number;
  name: string;
  image: string;
};
export type Student = {
  id: number;
  name: string;
};
