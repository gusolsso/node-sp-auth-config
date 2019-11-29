import * as spauth from 'node-sp-auth';
import { IStrategyDictItem } from '../interfaces';

export const getStrategie = (): IStrategyDictItem => {
  const strategie: IStrategyDictItem =
    {
      id: 'OnpremiseTmgCredentials',
      name: 'Form-based authentication (Forefront TMG)',
      withPassword: true,
      target: ['OnPremise'],
      verifyCallback: spauth.isTmgCredentialsOnpremise
    };

  return strategie;
};
