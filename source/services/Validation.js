import {VALIDATED, CANCEL} from '../config/Constant';
import {MyAlert} from '../utils/AlertUtil';

export let registerValidate;
registerValidate = text => {
  if (text.length === 0) {
    return 'Please enter your phone number';
  }
  if (text.length < 8) {
    return 'Please enter 8 digits';
  }
  return VALIDATED;
};
