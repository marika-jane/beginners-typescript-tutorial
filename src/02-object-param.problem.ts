import { expect, it } from "vitest";

//interface is only for representing objects (and a few other things)
interface addTwoNumbersArgs {
  first: number;
  second: number;
};

export const addTwoNumbers = (params: addTwoNumbersArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
