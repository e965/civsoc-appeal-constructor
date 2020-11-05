import React, { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

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

    const handePrint = () => {
        const PrintWindow = window.open('', ':)', 'location=1,status=1,scrollbars=1,resizable=1,height=1123,width=794');
        const Content = document.querySelector('.appeal__template__text');

        if (!SelectedAppeal || !PrintWindow || !Content) return false;

        const Template = SelectedAppeal.template;

        const Styles = [
            'body { font-family: "Times New Roman", Times, serif; line-height: 1.5; text-align: justify; }',
            '.text--right { text-align: right }',
            '.text--center { text-align: center }',
            '.text--mt { margin-top:1em }',
        ];

        PrintWindow.document.write('<!DOCTYPE html><html lang="ru"><head></head><body></body></html>');

        const PrintWindowHead = PrintWindow.document.querySelector('head') ?? document.createElement('head');

        PrintWindowHead.innerHTML = renderToStaticMarkup(
            <>
                <title>{SelectedAppeal.title}</title>
                <style>{Styles.join('\n')}</style>
            </>
        );

        const PrintWindowBody = PrintWindow.document.querySelector('body') ?? document.createElement('body');

        PrintWindowBody.innerHTML = renderToStaticMarkup(<Template {...FormData} />);

        PrintWindow.document.close();

        window.setTimeout(() => {
            setTimeout(() => {
                PrintWindow.focus();
            }, 100);
            PrintWindow.print();
        }, 500);

        return true;
    };

    return (
        <AppealPage
            {...{ org }}
            {...{ AppealsSource, SelectedAppeal, FormData }}
            {...{ handleFormOnSubmit, handleFormOnInput }}
            {...{ handePrint }}
        />
    );
};

export default EduPageContainer;
