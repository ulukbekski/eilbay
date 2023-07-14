import React from 'react';
import {
  Select,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import ProductCard from './Card';



const productData = [
  {
    id: 1,
    title: 'Компьютерные очки Xiaomi MI computer',
    description: 'This is the description of Product 1.',
    image: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
    price: 1900,
    rating: 4.9,
    ratingAmount: 2339,
  },
  {
    id: 2,
    title: 'Компьютерные очки Xiaomi MI computerd',
    description: 'This is the description of Product 2.',
    image: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
    price: 1900,
    rating: 4.9,
    ratingAmount: 2339,
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is the description of Product 3.',
    image: 'https://img.freepik.com/free-photo/beauty-portrait-young-brunette-woman-with-evening-makeup-perfect-clean-skin-sexy-model-with-long-hair-posing-studio-isolated-blue-dress_158538-25924.jpg',
    price: 1900,
    rating: 4.1,
    ratingAmount: 2339,
  },
];

interface SelectDataItem {
  id: number;
  label: string;
  defaultValue: string;
  MenuItems: string[];
}

const SelectData: SelectDataItem[] = [
  {
    id: 1,
    label: 'Город',
    defaultValue: 'Все',
    MenuItems: ["Все", 'Ош', 'Бишкек', 'Баткен'],
  },
  {
    id: 2,
    label: 'Категории',
    defaultValue: "Женское",
    MenuItems: ['Детское', 'Женское', 'Мужское'],
  },
  {
    id: 3,
    label: 'Подкатегории',
    defaultValue: '',
    MenuItems: ['Оверсайз', 'Классика', 'Спортивная одежда'],
  },
  {
    id: 4,
    label: 'Валюта',
    defaultValue: 'Сом',
    MenuItems: ['Сом', 'Рубль', 'Доллар'],
  },
];

interface CustomSelectProps {
  obj: SelectDataItem;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ obj }) => {
  const [age, setAge] = React.useState<string>(obj.defaultValue);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value as string);
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
          onChange={handleChange}
          
        >
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

function Catalog() {
  return (
    <Container>
      <div className="flex-start text-black gap-2">
        <Typography variant="h2">Женская одежда</Typography>
        <p>10000+ товаров</p>
      </div>
      <div className="hidden md:flex flex-start gap-3 mt-2 flex-wrap ">
        {SelectData.map((obj: SelectDataItem) => (
          <CustomSelect key={obj.id} obj={obj} />
        ))}
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
      <div className=' flex-center flex-wrap  gap-[22px] nowrap mt-[34px]'>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            
          />
        ))}
      </div>
    </Container>
  );
}

export default Catalog;