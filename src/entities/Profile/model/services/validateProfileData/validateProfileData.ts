import { Profile } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return ['NO_DATA'];
    }

    const errors: ValidateProfileError[] = [];

    const {
        first, lastname, age, country,
    } = profile;

    if (!first || !lastname) {
        errors.push('INCORRECT_USER_DATA');
    }

    if (!age || !Number.isInteger(age)) {
        errors.push('INCORRECT_USER_AGE');
    }

    if (!country) {
        errors.push('INCORRECT_USER_COUNTRY');
    }

    return errors;
};

export default validateProfileData;
