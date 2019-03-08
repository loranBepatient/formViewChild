export interface Question {
  inputName: string;
  required?: boolean;
}

export interface Activity {
  id: number;
  label?: string;
  age?: number;
}

export interface Form {
  id: number;
  questions: Question[];
  readonly: boolean;
}
