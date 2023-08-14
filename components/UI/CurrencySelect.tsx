import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useActions } from "@/utils/hooks/useAction";
import { useCurrency } from "@/utils/hooks/useCurrency";
import axios from "axios";
import { BsChevronDown } from "react-icons/bs";

export interface Currency {
  code: string;
  name: string;
  // symbol: string;
  rate: number;
}

const CurrencySelect: React.FC = () => {
  const { setCurrency } = useActions();
  const currency = useCurrency();

  const currencyNames = ["KGS", "RUB", "USD"];
  const [menuItem, setMenuItem] = React.useState(currencyNames[1]);

  const som = {
    code: "KGS",
    name: "Kyrgyzstan som",
    rate: 1,
  };
  const [rates, setRates] = React.useState<Currency>(som);

  const [data, setData] = React.useState<Currency[]>([som]);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get<{ [key: string]: Currency }>("https://www.floatrates.com/daily/kgs.json");
        const newRates = Object.values(response.data)
          .filter((value) => currencyNames.includes(value.code))
          .map((value) => ({
            code: value.code,
            name: value.name,
            rate: value.rate,
          }));
        setData(newRates);
      } catch (error) {
        console.error(error);
      }
    };
    getRates();
    setIsClient(true);
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const eve = event.target.value;
    const elem = data.find((obj) => eve === obj.code);
    const { code, name, rate } = eve === som.code ? som : elem ? elem : som;
    setRates({ code, name, rate });
    setMenuItem(eve);
    setCurrency(rates);
  };
  const Chevronicon = () => <BsChevronDown className='text-4xl mr-2'/>
  return (
    <>
      <FormControl 
      size={isClient && window.innerWidth < 900 ? "small" : "medium"}
      >
        <InputLabel id="demo-simple-select-label2">Валюта</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-selectb"
          value={currency.code}
          label="Валюта"
          defaultValue={menuItem}
          onChange={handleChange}
          IconComponent={Chevronicon}
        >
          {currencyNames.map((item: string) => (
            <MenuItem
              sx={{ fontSize: "16px" }}
              key={item + "menuItem"}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default CurrencySelect;
