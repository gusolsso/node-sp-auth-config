import { IStrategyDictItem, IOnpremiseTmgCredentials } from '../interfaces';
import * as url from 'url';

function isOnPremUrl(siteUrl: string): boolean {
  let host: string = (url.parse(siteUrl)).host;
  return host.indexOf('.sharepoint.com') === -1 && host.indexOf('.sharepoint.cn') === -1 && host.indexOf('.sharepoint.de') === -1
      && host.indexOf('.sharepoint-mil.us') === -1 && host.indexOf('.sharepoint.us') === -1;
}

function isTmgCredentialsOnpremise(siteUrl: string, T: IOnpremiseTmgCredentials): T is IOnpremiseTmgCredentials {
  let isOnPrem: boolean = isOnPremUrl(siteUrl);

  if (isOnPrem && (T).username !== undefined && (T).tmg) {
    return true;
  }

  return false;
}

export const getStrategie = (): IStrategyDictItem => {
  const strategie: IStrategyDictItem = {
    id: 'OnpremiseTmgCredentials',
    name: 'Form-based authentication (Forefront TMG)',
    withPassword: true,
    target: ['OnPremise'],
    verifyCallback: isTmgCredentialsOnpremise
  };

  return strategie;
};
