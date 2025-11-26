/**
 * Sets a value into an object using dot-notation keys.
 * Example: setDeep(obj, "a.b.c", "value") → { a: { b: { c: "value" } } }
 */
export default function setDeep(obj: any, path: string, value: any) {
  const keys = path.split(".");
  let current = obj;

  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1;

    if (isLast) {
      // If the key already exists, convert it to an array (multi-value support)
      if (current[key] !== undefined) {
        if (!Array.isArray(current[key])) {
          current[key] = [current[key]];
        }
        current[key].push(value);
      } else {
        current[key] = value;
      }
    } else {
      // Create nested objects if they don't exist
      if (!current[key] || typeof current[key] !== "object") {
        current[key] = {};
      }
      current = current[key];
    }
  });
}