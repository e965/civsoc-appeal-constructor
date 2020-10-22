import { AppealType } from '../types';

import FormFields from './fields';
import Template from './template';

const HolidayAppeal: AppealType = {
    title: 'Заявление на школьные каникулы',
    id: 'holiday',
    formFields: FormFields,
    template: Template,
};

export default HolidayAppeal;
