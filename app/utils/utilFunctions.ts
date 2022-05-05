export function cardFormat(value: string): string[] {
  const constant = 4;
  const values = [];
  let _constant = 0;

  for (let i = 0; i < 4; i++) {
    values.push(value.slice(_constant, constant + _constant));
    _constant = _constant + 4;
  }

  return values;
}
