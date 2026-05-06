export interface Option {
  name: string;
  label: string;
}

export interface Field {
  type: 'text' | 'textarea' | 'select';
  description?: string;
  name: string;
  label: string;
}

export interface Step {
  question: string;
  fields: Field;
}