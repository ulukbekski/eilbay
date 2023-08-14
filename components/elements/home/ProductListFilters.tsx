import React, { useRef, useEffect } from "react";

import {
  FormControl,
  Container,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
// import { setCurrency } from '@/store/currency/currency.slice';
import { useActions } from "@/utils/hooks/useAction";
import CurrencySelect from "@/components/UI/CurrencySelect";
import { BsChevronDown } from "react-icons/bs";
import Select from "@mui/material/Select";
interface CustomSelectProps {
  obj: SelectDataItem;
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const Chevronicon = () => <BsChevronDown className="text-4xl mr-2" />;




const CustomSelect: React.FC<CustomSelectProps> = ({ obj }) => {
  const [age, setAge] = React.useState<string>(obj.defaultValue);


  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value as string);
    if (obj.functions) {
      obj.functions(event.target.value as string);
    }
  };
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <FormControl key={"select" + obj.id}
        size={ isClient && window.innerWidth < 900 ? "small" : "medium"}>

        <InputLabel id="demo-select-small-label">{obj.label}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label={obj.label}
          defaultValue={obj.defaultValue}
          IconComponent={Chevronicon}
          onChange={handleChange}
        >
          {obj.MenuItems.map((item: string) => (
            <MenuItem
              sx={{ fontSize: "16px", pl: "11px" }}
              key={item + "menuItem"}
              value={item.slice()}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

interface SelectDataItem {
  id: number;
  label: string;
  defaultValue: string;
  MenuItems: string[];
  functions: null | Function;
}

export default function ProductListFilters() {
  const SelectCountryData: SelectDataItem = {
    id: 1,
    label: "Страны",
    defaultValue: "Все",
    MenuItems: ["Все", "Кыргызстан", "Казакстан", "Китай"],
    functions: null,
  };
  const SelectCategoryData = {
    id: 2,
    label: "Категории",
    defaultValue: "Все",
    MenuItems: ["Все", "Детское", "Женское", "Мужское"],
    functions: null,
  };
  const SelectSubcategoryData = {
    id: 3,
    label: "Подкатегории",
    defaultValue: "Все",
    MenuItems: ["Все", "Оверсайз", "Классика", "Спортивная одежда"],
    functions: null,
  };
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Container>
      <div>
        <div className="flex-start text-black gap-2 ">
          <Typography variant="h2">Женская одежда</Typography>
          {/* <p>10000+ товаров</p> */}
        </div>
        <div className="hidden md:flex flex-start gap-3 mt-2 flex-wrap ">
          <CustomSelect obj={SelectCountryData} />
          <CustomSelect obj={SelectCategoryData} />
          <CustomSelect obj={SelectSubcategoryData} />

          <CurrencySelect />
          <FormControl
            sx={{ width: "125px" }}
            size={ isClient && window.innerWidth < 900 ? "small" : "medium"}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Мин. цена
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              defaultValue={0}
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              label="Минимальная цена"
            />
          </FormControl>
          <FormControl
          sx={{ width: "125px" }}
          size={ isClient && window.innerWidth < 900 ? "small" : "medium"}
          >
            <InputLabel htmlFor="outlined-adornment-amount">
              Макс. цена
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              label="Максимальная цена"
            />
          </FormControl>
        </div>
      </div>
    </Container>
  );
}
