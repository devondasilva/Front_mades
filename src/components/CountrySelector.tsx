import { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

interface Country {
  label: string;
  value: string;
}

interface CountrySelectorProps {
  onChange: (country: string | null) => void; // Expecting string value
}

function CountrySelector({ onChange }: CountrySelectorProps) {
  const [value, setValue] = useState<Country | null>(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selected: Country | null) => {
    setValue(selected);
    onChange(selected ? selected.label : null); // Pass label or null
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      placeholder="Sélectionnez un pays"
    />
  );
}

export default CountrySelector;