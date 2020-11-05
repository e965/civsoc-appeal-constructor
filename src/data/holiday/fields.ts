import { FieldsType } from '../types';

const FormFields: FieldsType = {
    school: {
        type: 'text',
        label: 'Наименование образовательной организации',
        example: 'МБОУ "Гимназия №1"',
    },
    director: {
        type: 'text',
        label: 'ФИО директора',
        example: 'Иванов Иван Иванович',
    },
    student: {
        type: 'text',
        label: 'ФИО учащегося',
        example: 'Сидоров Николай Петрович',
    },
    parent: {
        type: 'text',
        label: 'ФИО родителя',
        example: 'Алексеевич Игорь Николаевич',
    },
    is_group: {
        type: 'checkbox',
        label: 'Это коллективное обращение',
    },
    email: {
        type: 'text',
        htmlType: 'email',
        label: 'Почта для обратной связи',
        example: 'sidorov@yandex.ru',
    },
    address: {
        type: 'text',
        label: 'Адрес для обратной связи',
        example: 'г. Москва, ул. Ленина 4',
    },
    director_order: {
        type: 'text',
        label: 'Приказ директора: номер, дата название',
        example: '20.05 от 01.01.1996',
    },
    director_order_text: {
        type: 'text',
        label: 'Что именно предписывается приказом директора',
        example: 'Сидеть и не шевелиться',
    },
    local_law: {
        type: 'text',
        label: 'Пункт, который предписывает каникулы в локальном акте образовательной организации',
        example: 'п. 1 ст. 5 «Правил внутреннего распорядка учащихся»',
    },
};

export default FormFields;
