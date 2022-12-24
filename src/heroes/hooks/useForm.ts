import { useState } from "react";

interface IUseForm {
  target: ITarget;
}

interface ITarget {
  name: string;
  value: string;
}

interface IInitialForm {
  searchText: string;
}

export const useForm = (initialForm: IInitialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: IUseForm) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
