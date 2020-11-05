import React from 'react';

import { AppealType } from '../../../data/types';

import './AppealPageTemplate.scss';

type PropsType = {
    SelectedAppeal: AppealType;
    FormData: { [id: string]: string | boolean };
};

const AppealPageTemplate: React.FC<PropsType> = props => {
    const { SelectedAppeal, FormData } = props;

    const Template = SelectedAppeal.template;

    return (
        <div className="appeal__template">
            <div className="appeal__template__head">Текст заявления:</div>
            <div className="appeal__template__text">
                <Template {...FormData} />
            </div>
        </div>
    );
};

export default AppealPageTemplate;
