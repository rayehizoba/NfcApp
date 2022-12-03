import en from 'validatorjs/src/lang/en';
import fr from 'validatorjs/src/lang/fr';
import Validator from 'validatorjs';

Validator.setMessages('en', en);
Validator.setMessages('fr', fr);
Validator.useLang('en');

export default Validator;

Validator.extend;
