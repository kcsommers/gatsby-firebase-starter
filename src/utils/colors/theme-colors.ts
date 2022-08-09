import * as colors from '../../styles/colors.module.scss';

const colorNames = Object.keys(colors || {});
export const themeColors = colorNames.reduce((colorMap, colorName) => {
  const colorStringSplit = colors[colorName].split(',');
  const hex = colorStringSplit[0];
  const rgb = colorStringSplit.slice(1).map((v) => +v.trim());
  colorMap[colorName] = { hex, rgb };
  return colorMap;
}, {});
