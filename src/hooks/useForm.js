import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [formValues, setFormValues] = useState(initialState);

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    }

    const onResetForm = () => {
        setFormValues(initialState);
    }

    return {
        ...formValues,
        formValues,
        setFormValues,

        onInputChange,
        onResetForm,
    }

}