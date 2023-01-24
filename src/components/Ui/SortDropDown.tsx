import { useDispatch, useSelector } from "react-redux";
import Select, { IndicatorSeparatorProps } from "react-select";
import { SORTBY } from "../../constants";
import { setSort } from "../../store/actions/newsActions";
import { StoreState } from "../../types";
//import styles from "./SortDropDown.module.scss";

interface Option {
  value: string;
  label: string;
}

export const SortDropDown = () => {
  const controlStyle = {
    backgroundColor: "white",
    width: 250,
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    borderRadius: 0,
    fontSize: 18,
    paddingBottom: 5,
  };

  const options = [
    { value: SORTBY.NEWEST, label: "Newest first" },
    { value: SORTBY.OLDEST, label: "Oldest first" },
    { value: SORTBY.POPULAR, label: "Most popular" },
  ];

  const sort = useSelector((state: StoreState) => state.news.sort);
  const selectedOption = options.filter((option) => option.value === sort);
  const dispatch = useDispatch();

  const colourStyles = {
    control: (styles: any) => ({ ...styles, ...controlStyle }),
  };

  const IndicatorSeparator = ({
    innerProps,
  }: IndicatorSeparatorProps<Option, true>): JSX.Element => {
    return <></>;
  };

  const handleOnChange = (newValue: any): void => {
    dispatch(setSort(newValue.value));
  };

  return (
    <Select
      value={selectedOption}
      options={options}
      styles={colourStyles}
      components={{ IndicatorSeparator }}
      onChange={handleOnChange}
    />
  );
};
