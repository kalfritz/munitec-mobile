export type RootStackParamList = {
  ChooseASchool: undefined;
  ChooseAClass: ChooseAClassParams;
  ChooseASubject: ChooseASubjectParams;
  StudentsDashboard: StudentsDashboardParams;
  NotFound: undefined;
};

export interface ChooseAClassParams {
  school: {
    id: number;
    name: string;
  };
}
export interface ChooseASubjectParams extends ChooseAClassParams {
  class: {
    id: number;
    name: string;
  };
}
export interface StudentsDashboardParams extends ChooseASubjectParams {
  subject: {
    id: number;
    name: string;
  };
}
