// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Urls Used for APIs
  MAIN_URL: "http://saasdev.ril.com/rtransport/util/",
  SEARCH_USERS: "http://saasdev.ril.com/rflow/wfcommon/searchUsers?name=",

  // Login Urls
  REDIRECT_URL:
    "http://ssodev.ril.com/mysso?redirect=http://saasdev.ril.com/rtransport/",
  MANUAL_LOGIN: "http://saasdev.ril.com/rflow/wfcommon/getAuth",
  USER_DETAIL_FROM_TOKEN_URL: "http://10.26.24.17:8080/auth/api/loginwithtoken",

  // Employee Detail Urls
  EMP_DETAILS_URL: "http://saasdev.ril.com/rflow/wfinboxgetcard/searchUserSelf",
  IMAGE_URL: "https://mobcontent.ril.com/picture/{id}.jpg",

  // WSO2 Url
  WSO2: "http://ssodev.ril.com/gentoken/",

  IMPORT_SCRIPT_FLAG: true,

  apmUrl: "http://saasdev.ril.com/apmrum/",
  geoApiUrl: "https://locationapi.ril.com/geolocation/loc-by-ip",
  serviceName: "CU_AJ_GH",
  initialPageLoadName: "TransportLayer",
  application: "TransportLayer",
  component_name: "CU_AJ_GH",
  platform: "EA_Tech_Services",
  sub_platform: "TransportLayer",
  env: "dev",
  rumCheckUrl: "http://digitalplatforms.ril.com/apis/rumStatus",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
