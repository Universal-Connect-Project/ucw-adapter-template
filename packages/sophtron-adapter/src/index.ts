import type { AdapterMap } from "@repo/utils";
import { SophtronAdapter } from "./adapter";
import { createMxIntGetVC, createMxProdGetVC } from "./createVc";
import type { AdapterDependencies } from "./models";

export const getSophtronAdapterMapObject = (dependencies: AdapterDependencies) => {
  return {
    mx: {
      testInstitutionAdapterName: "mx_int",
      vcAdapter: createMxProdGetVC(dependencies),
      widgetAdapter: new SophtronAdapter({
        int: false,
        dependencies
      })
    } as AdapterMap,
    mx_int: {
      vcAdapter: createMxIntGetVC(dependencies),
      widgetAdapter: new SophtronAdapter({
        int: true,
        dependencies
      })
    } as AdapterMap
  } as Record<string, AdapterMap>;
};

export * from "./models";
