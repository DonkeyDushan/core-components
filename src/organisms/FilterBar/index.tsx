import { ReactElement, useState } from "react";
import { FilterButton } from "../../components";
import DateTimePicker from "../DateTimePicker";

export const FilterBar = () => {
  return (
    <FilterButton text="EventDateTime" component={<DateTimePicker />} />
  );
};
