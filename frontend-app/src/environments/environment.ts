import * as packageJson from '../../package.json';

export const environment = {
    serverUrl: 'http://localhost:3000/api/',
    version: packageJson.version,
    systemName: packageJson.name,
};
