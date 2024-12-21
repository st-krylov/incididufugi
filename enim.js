export function containsTimeUnit(fullTimeUnit, timeUnit) {
  const index = fullTimeUnit.indexOf(timeUnit);

  if (index < 0) {
    return false;
  }

  return true;
}
