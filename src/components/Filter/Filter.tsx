import { FC, ChangeEvent } from "react";
import { useTsDispatch, useTsSelector } from "../../redux/reduxHooks";

import { filterContact } from "../../redux/filter/filterSlice";
import { getFilter } from "../../redux/contacts/contactsSlectors";
import { FilterInput } from "./Filter.styled";

const Filter: FC = () => {
  const filter: string = useTsSelector(getFilter);
  const dispatch = useTsDispatch();

  return (
    <FilterInput
      filter={filter}
      type="text"
      pattern="/^([0-9a-zA-Zа-яёА-ЯЁЇїЄєҐґ]\s?)*$/"
      title="The name can contain letters, numbers and and spaces between the words. Not contain dashes, apostrophe, signs * & etc. For example: Hermion Vue, Liza Grace, etc."
      placeholder="Find contacts by name"
      required
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        dispatch(filterContact((e.target as HTMLInputElement).value))
      }
    />
  );
};

export default Filter;
