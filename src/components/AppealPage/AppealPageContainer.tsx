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

    const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
    };

    return <AppealPage {...{ org }} {...{ AppealsSource, SelectedAppeal }} {...{ handleFormOnSubmit }} />;
};

export default EduPageContainer;
