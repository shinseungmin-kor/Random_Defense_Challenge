import { ENV, APP_ENV, NODE_ENV, ENV_FILE, API_URL } from 'react-native-dotenv';

console.log(`process.env : ${JSON.stringify(process.env)}`);
console.log(`ENV : ${ENV}`);
console.log(`APP_ENV : ${APP_ENV}`);
console.log(`NODE_ENV : ${NODE_ENV}`);
console.log(`ENV_FILE: ${ENV_FILE}`);
console.log(`API_URL : ${API_URL}`);

export default { ENV, APP_ENV, NODE_ENV, ENV_FILE, API_URL };
