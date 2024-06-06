import { useState } from 'react';

function useFormState(initialState) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!values.name) newErrors.name = "Name is required !";
        if (!values.email) newErrors.email = "Email is required !";
        if (!values.subject) newErrors.subject = "Subject is required !";
        if (!values.message) newErrors.message = "Message is required !";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (callback) => (e) => {
        e.preventDefault();
        if (validate()) {
            callback();
        }
    };

    const resetForm = (elements) => {
        setValues(initialState);
        setErrors({});
        elements.forEach((element) => {
            const inputElement = document.getElementById(element.id);
            if (inputElement) {
                inputElement.value = '';
            }
        });
    };
    return { values, errors, handleChange, handleSubmit, resetForm };
}

export default useFormState;
