import { FC as ReactFC } from 'react';

export type FieldType = {
    type: 'text' | 'checkbox';
    required?: boolean;
    label?: string;
    example?: string;
};

export type FieldsType = {
    [id: string]: FieldType;
};

export type AppealType = {
    title: string;
    id: string;
    formFields: FieldsType;
    template: ReactFC<any>;
};
