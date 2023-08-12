import React from 'react';


import { FormControl,Container, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from '@mui/material';
// import { setCurrency } from '@/store/currency/currency.slice';
import { useActions } from '@/utils/hooks/useAction';
import { useCurrency } from '@/utils/hooks/useCurrency';
import CurrencySelect from '@/components/UI/CurrencySelect';

interface CustomSelectProps {
    obj: SelectDataItem;
  }
  
  const CustomSelect: React.FC<CustomSelectProps> = ({ obj }) => {
    const [age, setAge] = React.useState<string>(obj.defaultValue);
    const handleChange = (event: SelectChangeEvent<string>) => {
      setAge(event.target.value as string);
      if(obj.functions){ obj.functions(event.target.value as string);
      }
    };
    return (
      <>
        <FormControl key={'select' + obj.id} sx={{ width: "175px" }}>
          <InputLabel id="demo-simple-select-label">{obj.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label={obj.label}
            defaultValue={obj.defaultValue}
            onChange={handleChange}>
            {obj.MenuItems.map((item: string) => (
              <MenuItem sx={{ fontSize: "16px" }} key={item + 'menuItem'} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  };
  
interface SelectDataItem {
    id:  number;
    label: string;
    defaultValue: string;
    MenuItems: string[];
    functions:  null | Function;
  }
  
  



export default function ProductListFilters() {
  
  const { setCurrency } = useActions()
  const currency = useCurrency()

  const SelectCountryData: SelectDataItem = 
    {
      id: 1,
      label: 'Страны',
      defaultValue: 'Все',
      MenuItems: ["Все", 'Кыргызстан', 'Казакстан', 'Китай'],
      functions: null
    }
  const SelectCategoryData ={
    id: 2,
    label: 'Категории',
    defaultValue: "Все",
    MenuItems: ['Все','Детское', 'Женское', 'Мужское'],
    functions: null
  }
  const SelectSubcategoryData = {
    id: 3,
    label: 'Подкатегории',
    defaultValue: '',
    MenuItems: ['Оверсайз', 'Классика', 'Спортивная одежда'],
    functions: null
  }
 
  return (
    <Container>
    <div>
      <div className="flex-start text-black gap-2 ">
        <Typography variant="h2">Женская одежда</Typography>
        <p>10000+ товаров</p>
      </div>
      <div className="hidden md:flex flex-start gap-3 mt-2 flex-wrap ">
        
        
        <CustomSelect obj={SelectCountryData}  />
        <CustomSelect obj={SelectCategoryData}  />
        <CustomSelect obj={SelectSubcategoryData}  />
        <CurrencySelect />
        <FormControl sx={{ width: "125px" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Мин. цена</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Минимальная цена"
          />
        </FormControl>
        <FormControl sx={{ width: "125px" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Макс. цена</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Максимальная цена"
          />
        </FormControl>
      </div>
    </div>
    </Container>
  )
}
