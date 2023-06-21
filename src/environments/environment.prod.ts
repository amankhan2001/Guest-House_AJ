export const environment = {
  production: true,
  // Urls Used for APIs
  MAIN_URL: "/rtransport/util/",
  SEARCH_USERS: "https://saas.ril.com/rflow/wfcommon/searchUsers?name=",

  // Login Urls
  REDIRECT_URL:
    "https://sso.ril.com/mysso?redirect=http://saas.ril.com/rtransport/",
  MANUAL_LOGIN: "https://saas.ril.com/rflow/wfcommon/getAuth",
  USER_DETAIL_FROM_TOKEN_URL: "http://10.26.24.17:8080/auth/api/loginwithtoken",

  // Employee Detail Urls
  EMP_DETAILS_URL: "https://saas.ril.com/rflow/wfinboxgetcard/searchUserSelf",
  IMAGE_URL: "https://mobcontent.ril.com/picture/{id}.jpg",

  // WSO2 Url
  WSO2: "https://sso.ril.com/gentoken/",

  IMPORT_SCRIPT_FLAG: true,

  apmUrl: "https://saas.ril.com/apmrum/",
  geoApiUrl: "https://locationapi.ril.com/geolocation/loc-by-ip",
  serviceName: "CU_AJ_GH",
  initialPageLoadName: "TransportLayer",
  application: "TransportLayer",
  component_name: "CU_AJ_GH",
  platform: "EA_Tech_Services",
  sub_platform: "TransportLayer",
  env: "prod",
  rumCheckUrl: "http://digitalplatforms.ril.com/apis/rumStatus",
};
