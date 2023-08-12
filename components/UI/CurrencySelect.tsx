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
    // symbol: "c",
    name: "Kyrgyzstan som",
    rate: 1,
  };
  const [rates, setRates] = React.useState<Currency>(som);

  const [data, setData] = React.useState<Currency[]>([som]);

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
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const eve = event.target.value;
    const elem = data.find((obj) => eve === obj.code);
    const { code, name, rate } = eve === som.code ? som : elem ? elem : som;
    setRates({ code, name, rate });
    setMenuItem(eve);
    setCurrency(rates);
  };

  return (
    <>
      <FormControl sx={{ width: "175px" }}>
        <InputLabel id="demo-simple-select-label2">Валюта</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-selectb"
          value={currency.code}
          label="Валюта"
          defaultValue={menuItem}
          onChange={handleChange}
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
