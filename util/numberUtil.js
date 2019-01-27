export function getModifiedNumber(inputString, current) {
  if (inputString[0] === '+' || inputString[0] === '-' && !Number.isNaN(parseInt(inputString))) {
    return current + parseInt(inputString);
  }

  const asNumber = parseInt(inputString);

  if (Number.isNaN(asNumber)) {
    return 0;
  }

  return asNumber;
}

