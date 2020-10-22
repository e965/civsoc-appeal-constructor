import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
type PropsType = {
    errorID: number;
};

const ErrorPageContainer: React.FC<PropsType> = ({ errorID }) => {
    useEffect(() => {
        console.warn(`Возникла ошибка. Код: ${errorID}`);
    }, [errorID]);

    return (
        <>
            <p>
                Упс, ошибка! Может быть, <Link to="/">стоит вернуться</Link> на главную страницу?
            </p>
        </>
    );
};

export default ErrorPageContainer;
