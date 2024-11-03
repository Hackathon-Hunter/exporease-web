import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BusinessSetupState = {
  email: string;
  name: string;
  password: string;
  business: Business;
  product: Product;
  exportCountries: ExportCountry[];
  customExportCountries: CustomExportCountry[];
  productFileLocal: File[];
};

type Business = {
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

type Product = {
  name: string;
  productAssets: string[];
};

type ExportCountry = {
  country: string;
  percentage: number;
  description: string;
  countryFlag: string;
};

type CustomExportCountry = {
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
  name: 'counter',
  initialState,
  reducers: {
    firstStep: (
      state,
      action: PayloadAction<
        Pick<Business, 'name' | 'description' | 'type' | 'keywords' | 'website'>
      >
    ) => {
      state.business.name = action.payload.name;
      state.business.type = action.payload.type;
      state.business.keywords = action.payload.keywords;
      state.business.website = action.payload.website;
    }
  }
});

export const { firstStep } = businessSetupSlice.actions;
export default businessSetupSlice.reducer;
