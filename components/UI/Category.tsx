import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelect: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onCategoryChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="category-select-label">Категория</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory}
        label="Категория"
        onChange={handleChange}
        IconComponent={FiChevronRight}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category} sx={{fontSize:14}}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
