import * as inquirer from 'inquirer';

import { IAdfsUserCredentials } from 'node-sp-auth';
import { IAuthContext, IAuthConfigSettings } from '../../interfaces';
import { defaultPasswordMask } from '../../utils';

const wizard = (authContext: IAuthContext, answersAll: inquirer.Answers = {}, settings: IAuthConfigSettings = {}): Promise<inquirer.Answers> => {
  const adfsUserCredentials: IAdfsUserCredentials = (authContext.authOptions as IAdfsUserCredentials);
  const promptFor: inquirer.Question[] = [
    {
      name: 'username',
      message: 'User name',
      type: 'input',
      default: adfsUserCredentials.username,
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }, {
      name: 'password',
      message: 'Password',
      type: 'password',
      default: adfsUserCredentials.password ? defaultPasswordMask : null,
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }, {
      name: 'relyingParty',
      message: 'relyingParty',
      type: 'input',
      default: adfsUserCredentials.relyingParty || 'urn:sharepoint:portal',
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }, {
      name: 'adfsUrl',
      message: 'adfsUrl',
      type: 'input',
      default: adfsUserCredentials.adfsUrl,
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }, {
      name: 'adfsCookie',
      message: 'adfsCookie',
      type: 'input',
      default: adfsUserCredentials.adfsCookie || 'FedAuth',
      validate: (answer: string) => {
        if (answer.length === 0) {
          return false;
        }
        return true;
      }
    }
  ];
  return inquirer.prompt(promptFor)
    .then((answers: inquirer.Answers) => {
      return {
        ...answersAll,
        ...answers,
        password: answers.password === defaultPasswordMask
          ? adfsUserCredentials.password
          : answers.password
      };
    });
};

export default wizard;
