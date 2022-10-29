import { useState } from "react";

//custom hook para forms
//recive un estado inicial
export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState(initialForm)
  
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    // retorna estas funciones
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}
