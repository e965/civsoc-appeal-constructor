import { AppealType } from '../../../data/types';

import './AppealPageTemplate.scss';

type PropsType = {
    SelectedAppeal: AppealType;
    FormData: { [id: string]: string | boolean };
    handePrint: () => void;
};

const AppealPageTemplate: React.FC<PropsType> = props => {
    const { SelectedAppeal, FormData } = props;
    const { handePrint } = props;

    const Template = SelectedAppeal.template;

    return (
        <div className="appeal__template">
            <div className="appeal__template__head">Текст заявления:</div>
            <div className="appeal__template__text">
                <Template {...FormData} />
            </div>
            <div className="appeal__template__actions">
                <button className="appeal__template__actions__print" onClick={handePrint}>
                    Распечатать
                </button>
            </div>
        </div>
    );
};

export default AppealPageTemplate;
