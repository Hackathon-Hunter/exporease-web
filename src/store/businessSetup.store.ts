import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BusinessSetupState = {
  email: string;
  name: string;
  password: string;
  business: Business;
  product: Product;
  exportCountries: ExportCountry[];
  customExportCountries: CustomExportCountry[];
  productFileLocal: File[];
};

export type Business = {
  name: string;
  type: 'product' | 'service';
  description: string;
  website: string;
  expectationIncome: number;
  typicalExport: string;
  productEstimationPerMonth: number;
  productEstimationPerMonthUnit: string;
  keywords: string[];
  peopleBehaviorTargets: string[];
  customerTargets: string[];
};

export type Product = {
  name: string;
  productAssets: string[];
};

export type ExportCountry = {
  country: string;
  percentage: number;
  description: string;
  countryFlag: string;
};

export type CustomExportCountry = {
  country: string;
};

const initialState: BusinessSetupState = {
  email: '',
  name: '',
  password: '',
  business: {
    name: '',
    type: 'product',
    description: '',
    website: '',
    expectationIncome: 0,
    typicalExport: '',
    productEstimationPerMonth: 0,
    productEstimationPerMonthUnit: '',
    keywords: [],
    peopleBehaviorTargets: [],
    customerTargets: []
  },
  product: {
    name: '',
    productAssets: []
  },
  exportCountries: [],
  customExportCountries: [],
  productFileLocal: []
};

const businessSetupSlice = createSlice({
  name: 'businessSetup',
  initialState,
  reducers: {
    setup: (
      state,
      action: PayloadAction<BusinessSetupState>
    ) => {
      state = { ...state, ...action.payload };
    }
  }
});

export const { setup } = businessSetupSlice.actions;
export default businessSetupSlice.reducer;
