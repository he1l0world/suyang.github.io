import { RootState } from '../../redux/globalStore';
import { setTheme, ThemeType, ThemeTypeOptions } from '../../redux/global/ThemeSlice';
import Select, { SelectProps } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { MenuItem } from '@mui/material';

const ThemeModeSelect = (props: SelectProps) => {
  const theme: ThemeType = useSelector((state: RootState) => state.theme.theme);
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
      <MenuItem value={ThemeTypeOptions.System}> System </MenuItem>
      <MenuItem value={ThemeTypeOptions.Light}> Light </MenuItem>
      <MenuItem value={ThemeTypeOptions.Dark}> Dark </MenuItem>
    </Select>
  );
};

export default ThemeModeSelect;
