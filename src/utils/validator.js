

export const required = (value) => {
  if (value)  return undefined;
  return 'Это поле обязательно';

}

export const requiredFieldMaxValue = (value) => {
  if (value) {if (value.length > 20)  return `Максимальное количество символов ${20} `;
    return undefined;
    }
  return 'Field is required';
}



export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength)  return `Максимальное количество символов ${maxLength} `;
  return undefined;

}


export const maxLengthCreatorProfile = (maxLength) => (value) => {
  if (value) {
    if (value.length > maxLength)  return `Максималное количество  ${maxLength} символов`;
      return undefined;
  }

}
export const minLengthCreator = (minLength) => (value) => {
  if (value.length < minLength) return `Min length is ${minLength} symbols`;
  return undefined;
}
