import setDeep from "./getDeep";

/**
 * Collects form data and returns a nested object using dot-notation keys.
 */
export function getFormData<T = any>(form: HTMLFormElement): T {
  const formData = new FormData(form);
  const result: any = {};

  for (const [key, value] of formData.entries()) {
    setDeep(result, key, value);
  }

  return result as T;
}
