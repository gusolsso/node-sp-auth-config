const authPropsMapping = {
  siteurl: 'siteUrl',
  strategy: 'strategy',
  curl: 'curl',
  username: 'username',
  password: 'password',
  tmg: 'tmg',
};

export interface IAuthEnvProps {
  [key: string]: string;
  custom?: any;
}

export const getConfigFromEnvVariables = (): IAuthEnvProps | null => {
  const prefix = 'SPAUTH_';
  const authProps = Object.keys(process.env)
    .filter((key) => key.indexOf(prefix) === 0)
    .reduce((res, key) => {
      const authProp = authPropsMapping[key.replace(prefix, '').toLowerCase()];
      if (typeof authProp !== 'undefined') {
        res[authProp] = process.env[key];
      }
      if (authProp === 'custom') {
        try {
          res['custom'] = JSON.parse(process.env[key]);
        } catch (ex) { /**/ }
      }
      return res;
    }, {});
  if (Object.keys(authProps).length === 0) {
    return null;
  }
  return authProps;
};
