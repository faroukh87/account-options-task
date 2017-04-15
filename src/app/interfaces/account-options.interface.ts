export interface AccountOptionsInterface {
    allowUnverifiedLogin?: boolean;
    defaultLanguage?: string;
    loginIdentifierConflict?: string;
    loginIdentifiers?: string;
    preventLoginIDHarvesting?: boolean;
    sendAccountDeletedEmail?: boolean;
    sendWelcomeEmail?: boolean;
    verifyEmail?: boolean;
    verifyProviderEmail?: boolean;
}
