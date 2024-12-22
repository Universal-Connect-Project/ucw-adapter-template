import type { AdapterMap } from "@repo/utils";
import { getTemplateAdapterMapObject } from "@ucp-npm/template-adapter";
import { getFinicityAdapterMapObject } from "@ucp-npm/finicity-adapter";
import { adapterMapObject as testAdapterMapObject } from "./test-adapter";

import config from "./config";
import { get, set } from "./services/storageClient/redis";
import * as logger from "./infra/logger";

const templateAdapterMapObject = getTemplateAdapterMapObject();
const finicityAdapterMapyObject = getFinicityAdapterMapObject({
  cacheClient: {
    set: set,
    get: get,
  },
  logClient: logger,
  aggregatorCredentials: {
    finicitySandbox: {
      partnerId: config.FinicityPartnerId,
      appKey: config.FinicityAppKey,
      secret: config.FinicitySecret,
      basePath: "https://api.finicity.com",
      vcEndpoint: "https://api.finicity.com/",
      aggregator: "finicity_sandbox",
      available: true
    },
    finicityProd: {
      partnerId: config.FinicityPartnerIdProd,
      appKey: config.FinicityAppKeyProd,
      secret: config.FinicitySecretProd,
      basePath: "https://api.finicity.com",
      vcEndpoint: "https://api.finicity.com/",
      aggregator: "finicity",
      available: true
    }
  },
  envConfig: {
    HostUrl: config.HOSTURL,
    WebhookHostUrl: config.WebhookHostUrl
  },
});

// This is where you add adapters
export const adapterMap: Record<string, AdapterMap> = {
  ...finicityAdapterMapyObject,
  ...templateAdapterMapObject,
  // ...testAdapterMapObject,
};
export type Aggregator = keyof typeof adapterMap;
export const aggregators = Object.keys(adapterMap);
