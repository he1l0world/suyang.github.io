import { RootState } from '../../redux/globalStore';
import { ThemeType, setTheme } from '../../redux/globalReducer';
import Select, { SelectProps } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { MenuItem } from '@mui/material';

const ThemeModeSelect = (props: SelectProps) => {
  const theme: ThemeType = useSelector((state: RootState) => state.theme);
  const dispath = useDispatch();

  const handleChange = (event) =>
    dispath(setTheme(event.target.value as ThemeType));

  return (
    <Select
      value={theme}
      onChange={handleChange}
      data-screenshot='toggle-mode'
      {...props}
    >
      <MenuItem value='system'> System </MenuItem>
      <MenuItem value='Light'> Light </MenuItem>
      <MenuItem value='dark'> Dark </MenuItem>
    </Select>
  );
};

export default ThemeModeSelect;
