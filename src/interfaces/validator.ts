export interface Validator{
  type: string;
  properties: TypeProp;
  additionalProperties: boolean;
  required: string[];
}

interface TypeProp{
  [name: string]: ValidateAttribute;
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