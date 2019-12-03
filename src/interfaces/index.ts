import { IHooks } from './wizard';

export type StrategyCode = 'OnpremiseTmgCredentials';

export interface IOnpremiseTmgCredentials {
  username: string;
  password: string;
  curl: string;
  tmg: boolean;
}

export interface IAuthContext {
  siteUrl: string;
  strategy?: StrategyCode;
  authOptions: IOnpremiseTmgCredentials;
  custom?: any;
  settings?: IAuthConfigSettings;
}

export interface IAuthContextSettings {
  siteUrl: string;
  strategy?: StrategyCode;
  [name: string]: any;
}

export interface IStrategyDictItem {
  id: StrategyCode;
  withPassword: boolean;
  target: ('OnPremise' | 'Online' | 'O365Dedicated')[];
  name: string;
  verifyCallback?: (...args: any[]) => boolean;
  withSeparator?: boolean;
}

export interface IAuthConfigSettings {
  configPath?: string;
  defaultConfigPath?: string;
  encryptPassword?: boolean;
  saveConfigOnDisk?: boolean;
  authOptions?: IOnpremiseTmgCredentials;
  forcePrompts?: boolean;
  masterKey?: string;
  headlessMode?: boolean;
  hooks?: IHooks;
}

export interface ICheckPromptsResponse {
  needPrompts: boolean;
  needSave: boolean;
  authContext?: IAuthContext;
  jsonRawData?: any;
}

export interface ICliInitParameters {
  path: string;
  encrypt?: boolean;
  masterkey?: string;
  format?: boolean;
}

export interface ICliReadParameters extends ICliInitParameters {}
