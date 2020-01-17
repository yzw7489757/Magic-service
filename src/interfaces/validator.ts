export interface Validator{
  type: string;
  properties: {
      [name: string]: ValidateAttribute;
  };
  additionalProperties: boolean;
  required: string[];
}

interface ValidateAttribute{
  type: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maximum?: number;
  minimum?: number;
  enum?: string[];
}

type UnRequiredAndOmit<T,K extends string> = { 
  [P in Exclude<keyof T, K>]?: T[P];
}

export interface InvalidError{
  keyword: string;
  dataPath: string;
  schemaPath: string;
  params: { 
    [attr: string]: string;
  };
  message: string;
}