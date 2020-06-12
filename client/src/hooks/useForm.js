// write your custom hook here to control your checkout form

import {useLocalStorage} from "./useLocalStorage";

export const useForm = (key, initialValues, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value//set the value of the given key
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        cb(true);
    };

    const clearForm = e =>{
        e.preventDefault();
        setValues(initialValues);
    }

    return [values, clearForm, handleSubmit, handleChanges];
}