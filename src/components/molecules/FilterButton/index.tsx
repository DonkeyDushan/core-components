import { ReactElement, useState } from "react";
import { FilterArrow } from "../../atoms";

type FilterButtonTypes = {
  text: string;
  component: ReactElement;
}

export const FilterButton = ({ text, component }: FilterButtonTypes) => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="grid gap-4">
      <button
        className="w-fit flex flex-nowrap items-center gap-3 text-text-secondary py-2.5 px-3.5 border-solid border-[1px] rounded-sm border-gray-border"
        onClick={() => setExtended(!extended)}
      >
        {text}
        <FilterArrow />
      </button>
      {extended && component}
    </div>
  );
};
