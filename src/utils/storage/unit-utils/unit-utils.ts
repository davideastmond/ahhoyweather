import { isNil } from "lodash";

export function initializeUnits(setFunction: (unit: string) => void) {
  const localUnit = localStorage.getItem("unit");

  if (isNil(localUnit)) {
    const defaultUnit: string = "si";
    // Write the default "si" to localstorage
    localStorage.setItem("unit", defaultUnit);
    setFunction && setFunction(defaultUnit);
  } else {
    setFunction && setFunction(localUnit);
  }
}
