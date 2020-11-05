import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EduApeals } from '../../data';

import { AppealType } from '../../data/types';

import AppealPage from './AppealPage';

type PropsType = {
    org: 'edu' | 'police';
    appealID?: string;
};

const EduPageContainer: React.FC<PropsType> = ({ org, appealID = '' }) => {
    const [AppealsSource, setAppealsSource] = useState<AppealType[]>([]);
    const [SelectedAppeal, setSelectedAppeal] = useState<AppealType | null>(null);

    const [FormData, setFormData] = useState<{ [id: string]: string | boolean }>({});

    useEffect(() => {
        const tmpPoliceAppeals: AppealType[] = [];
        setAppealsSource(org === 'edu' ? EduApeals : tmpPoliceAppeals);
    }, [org]);

    useEffect(() => {
        const Appeal = AppealsSource.find(Appeal => Appeal.id === appealID);

        if (Appeal) {
            setSelectedAppeal(Appeal);
        } else {
            setSelectedAppeal(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AppealsSource, appealID]);

    const getDataFromForm = (target: EventTarget & HTMLFormElement) => {
        const FormFieldsKeys = Object.keys(SelectedAppeal?.formFields ?? {});

        const FormDataCopy = { ...FormData };

        FormFieldsKeys.forEach(key => {
            const ThisTarget = target[key];
            let TargetValueType = '';

            switch (ThisTarget.type) {
                case 'text':
                case 'number':
                case 'email':
                    TargetValueType = 'value';
                    break;

                case 'checkbox':
                    TargetValueType = 'checked';
                    break;
            }

            FormDataCopy[key] = ThisTarget[TargetValueType];
        });

        setFormData(FormDataCopy);
    };

    const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getDataFromForm(event.currentTarget);
    };

    const handleFormOnInput = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getDataFromForm(event.currentTarget);
    };

    return <AppealPage {...{ org }} {...{ AppealsSource, SelectedAppeal, FormData }} {...{ handleFormOnSubmit, handleFormOnInput }} />;
};

export default EduPageContainer;
