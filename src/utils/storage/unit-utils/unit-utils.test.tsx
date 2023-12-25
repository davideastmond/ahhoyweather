import { render } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import App from "../../../App";
import { Unit } from "../../../data/unit";
import { initializeUnits } from "./unit-utils";
describe("Unit untils", () => {
  test("unit-utils - unit is not defined", () => {
    vitest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, vitest.fn());
    render(<App />);
    const funcSpy = vitest.fn();

    initializeUnits(funcSpy);
    expect(funcSpy).toHaveBeenCalled();
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  test("unit-utils - unit is defined", () => {
    window.localStorage.setItem("unit", Unit.SI);
    vitest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, vitest.fn());
    const funcSpy = vitest.fn();
    initializeUnits(funcSpy);
    expect(funcSpy).toHaveBeenCalled();
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});
