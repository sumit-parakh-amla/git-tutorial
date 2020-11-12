export function add<T>(a: T, b: T) {
  if (!isNaN(Number(a)) && !isNaN(Number(b)) ) {
    return +a + +b;
  }
  return "" + a + "" + b;
}

// For function name, standard practice is camelCase
// For class name, standard practice is PascalCase
