import * as spauth from 'node-sp-auth';
import { IStrategyDictItem } from '../interfaces';

export const getStrategies = (): IStrategyDictItem[] => {
  const strategies: IStrategyDictItem[] = [
    {
      id: 'OnpremiseTmgCredentials',
      name: 'Form-based authentication (Forefront TMG)',
      withPassword: true,
      target: ['OnPremise'],
      verifyCallback: spauth.isTmgCredentialsOnpremise
    },
  ];

  return strategies;
};
