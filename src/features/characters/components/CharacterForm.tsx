import { useFormik } from "formik";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Input, Label, Textarea } from "theme-ui";
import { object, string } from "yup";
import characterStorage from "../utils/charactersStorage";
import { loadSingleCharacter } from "../thunks/charactersThunks";
import { Character } from "../typings/charactersTypes";

export interface CharacterFormProps {
  character: Character;
}

const CharacterForm: FC<CharacterFormProps> = (props) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: props.character,
    validationSchema,
    onSubmit: (values) => {
      push(`/characters/${values.id}`);
      dispatch(loadSingleCharacter(values.id));
      characterStorage.saveEdited(values);
    },
  });

  return (
    <form onSubmit={handleSubmit as any}>
      <Label htmlFor="name">Nome</Label>
      <Input
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />

      <Label sx={{ mt: 2 }} htmlFor="description">
        Descrição
      </Label>
      <Textarea
        name="description"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        rows={6}
      />
      <Button type="submit" sx={{ mt: 2 }}>
        Salvar
      </Button>
    </form>
  );
};

export const validationSchema = object({
  name: string().required(),
  description: string().required(),
});

export default CharacterForm;
