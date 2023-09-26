export const getColorRGB = (colorName) => {
  const tempDiv = document.createElement("div");
  tempDiv.style.color = colorName;
  document.body.appendChild(tempDiv);
  const computedColor = getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);
  const rgbValues = computedColor.match(/\d+/g).map(Number);
  return rgbValues;
};
