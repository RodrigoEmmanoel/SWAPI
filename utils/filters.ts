function getInitials(name: string) {
  const splitName = name.trim().split(" ");
  const firstInitial = splitName[0][0];
  const lastInitial = splitName[splitName.length - 1][0];
  return `${firstInitial}${lastInitial}`.toUpperCase();
}

function formatGenderToPtBr(gender: string) {
  switch (gender) {
    case "male":
      return "Masculino";
    case "female":
      return "Feminino";
    case "n/a":
      return "-";
    default:
      return gender;
  }
}

function formatHeight(height: string) {
  if (height.length === 3) {
    return `${height.charAt(0)},${height.substring(1)} cm`;
  }
  return `${height} cm`;
}

export { getInitials, formatGenderToPtBr, formatHeight };
