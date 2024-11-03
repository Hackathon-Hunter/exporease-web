export type SetupInput = {
  name: string;
  description: string;
  website: string;
  type: string;
  expectationIncome: number;
  keywords: string[];
  peopleBehaviorTargets: string[];
  productName: string;
  productAsset?: File;
  countries: {
    value: string;
    label: string;
  }[];
};
