interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read appointment information',
    'Read clinic information',
    'Read medical record',
    'Read billing information',
  ],
  ownerAbilities: ['Manage user data', 'Manage clinic data', 'Manage appointment data', 'Manage medical records'],
  getQuoteUrl: 'https://app.roq.ai/proposal/94663670-1c1d-4a12-b401-e57b17919d62',
};
