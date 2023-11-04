import { isNil } from "lodash";
import { Unit } from "../../../data/unit";

export function initializeUnits(setFunction: (unit: Unit) => void) {
  const localUnit: Unit = localStorage.getItem("unit") as Unit;

  if (isNil(localUnit)) {
    const defaultUnit: Unit = Unit.SI;
    // Write the default SI to localstorage
    localStorage.setItem("unit", defaultUnit);
    setFunction && setFunction(defaultUnit);
  } else {
    setFunction && setFunction(localUnit);
  }
}
