import {AccountOptionsInterface} from '../interfaces/account-options.interface';
/**
 * Created by Faroukh on 15.04.2017.
 */
export default class AccountOptions implements AccountOptionsInterface {

    allowUnverifiedLogin: boolean;
    defaultLanguage: string;
    loginIdentifierConflict: string;
    loginIdentifiers: string;
    preventLoginIDHarvesting: boolean;
    sendAccountDeletedEmail: boolean;
    sendWelcomeEmail: boolean;
    verifyEmail: boolean;
    welcomeEmailTemplates: any;
    verifyProviderEmail: boolean;

}
