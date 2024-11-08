const processEnv = {};
const envs = {
  ...process.env,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(process as Record<string, any>).client_envs,
};

Object.keys(envs).forEach((k) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (processEnv as Record<string, any>)[k.toUpperCase()] = envs[k];
});

const nonSensitiveSharedConfig = {
  AuthServiceEndpoint: "https://login.universalconnectproject.org/api",
  SearchEndpoint: "https://search.universalconnectproject.org/api/",
  AnalyticsServiceEndpoint:
    "https://analytics.universalconnectproject.org/api/",
  Component: "UniversalWidget",
  ServiceName: "universal_widget",
  CryptoAlgorithm: "aes-256-cbc",
  SophtronApiServiceEndpoint: "https://api.sophtron.com/api",
  SophtronVCServiceEndpoint: "https://vc.sophtron.com/api/",
  Auth0TokenUrl: "https://dev-d23wau8o0uc5hw8n.us.auth0.com/oauth/token",
};

const keysToPullFromEnv = [
  "SophtronClientId",
  "SophtronClientSecret",

  "PORT",

  "HOSTURL",
  "WebhookHostUrl",
  "LogLevel",

  "UCPClientId",
  "UCPClientSecret",

  "Env",

  "RedisServer",
  "RedisCacheTimeSeconds",
  "ResourcePrefix",
  "ResourceVersion",

  "SophtronApiUserId",
  "SophtronApiUserSecret",

  "MxClientId",
  "MxApiSecret",
  "MxClientIdProd",
  "MxApiSecretProd",

  "AkoyaClientId",
  "AkoyaApiSecret",
  "AkoyaClientIdProd",
  "AkoyaApiSecretProd",

  "FinicityPartnerId",
  "FinicityAppKey",
  "FinicitySecret",
  "FinicityPartnerIdProd",
  "FinicityAppKeyProd",
  "FinicitySecretProd",

  "ELASTIC_SEARCH_URL",
  "INSTITUTION_POLLING_INTERVAL",
  "INSTITUTION_CACHE_LIST_URL",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Record<string, any> = keysToPullFromEnv.reduce(
  (acc, envKey) => {
    return {
      ...acc,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [envKey]: (processEnv as Record<string, any>)[envKey.toUpperCase()],
    };
  },
  {
    ...nonSensitiveSharedConfig,
  },
);

export default config;
