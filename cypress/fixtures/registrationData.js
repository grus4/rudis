
export function generateRandomEmail(prefix = 'test') {
    const randomString = Math.random().toString(36).substring(2, 11); // Генерує випадковий рядок довжиною 9 символів
    return `${prefix}_${randomString}@yopmail.com`;
}

export const registrationData = {
    firstName: 'Max',
    lastName: 'Danish',
    email: generateRandomEmail(),
    password: 'Qwert_1234!',
    differentPassword: 'Qwert_12340!!!',
    registeredEmail: 'test@yopmail.com',
    enteredDataLessThanMinimumAllowed: 'M',
    enteredDataMoreThanMaxAllowed: 'MaximusotrMaximusotrw',
    invalidEmail: 'test1:@@yopmail.com',
    invalidPassword: '123rtewi'
};


