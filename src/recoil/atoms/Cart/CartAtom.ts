import { atom, AtomEffect } from "recoil";
import Result from "../../../models/Result";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const cartState = atom({
  key: "cartState",
  default: [] as Result[],
  effects: [localStorageEffect<Result[]>("current_cart")],
});
