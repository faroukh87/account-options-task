import {AccountOptionsInterface} from '../interfaces/account-options.interface';

export default class AccountOptions implements AccountOptionsInterface {

    allowUnverifiedLogin: boolean;
    defaultLanguage: string;
    loginIdentifierConflict: string;
    loginIdentifiers: string;
    preventLoginIDHarvesting: boolean;
    sendWelcomeEmail: boolean;
    verifyEmail: boolean;
    verifyProviderEmail: boolean;

}
