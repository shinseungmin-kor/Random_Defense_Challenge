declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FunctionComponent<SvgProps>;
    export default content;
}
declare module "*.json"

declare module 'react-native-dotenv' {
    export const ENV: string;
    export const APP_ENV: string;
    export const NODE_ENV: string;
    export const ENV_FILE: string;
    export const API_URL: string;
    export const CODEPUSH_KEY_IOS: string;
    export const CODEPUSH_KEY_AOS: string;
    export const CRYPTO: string;
    export const SEND_BIRD_APP_ID: string;
}