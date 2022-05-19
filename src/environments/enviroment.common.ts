export const apiUrls = {
  REST_COUNTRIES: 'https://restcountries.com/v3.1/',
};
export const commonEnviroment = {
  apiEndpoints: {
    ALL_Regions: apiUrls.REST_COUNTRIES + 'all', // [GET] all information about region countries ect.
    REGION: apiUrls.REST_COUNTRIES + 'region', // [GET] specific region
    COUNTRY: apiUrls.REST_COUNTRIES + 'name', // [GET] specific region
  },
};
