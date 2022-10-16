export const GATEWAY_SCREEN_KEYS = {
  SELECT_INSTITUTION: "select_institution",
  LOG_IN: "log_in",
  CHOOSE_ACCOUNT: "choose_account",
  LINKAGE_STATUS: "linkage_status"
};

export const MAP_AUTH_METHOD_TYPE_TO_ICON = {
  internet_banking: "/assets/images/internet-banking.svg",
  mobile_banking: "/assets/images/mobile-banking.svg",
};

export const BANK_LINKAGE_STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
};

export const MOCK_INSTITUTES = [
  {
    _id: "5f2d08be60b92e2888287702",
    name: "GTBank",
    type: "PERSONAL_BANKING",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to GTBank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "UserID or Account Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071acf73e6468062ae8de",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to GTBank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "UserID or Account Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae8e4",
      },
    ],
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/gtbank-icon.png",
    identifier: "mono.connections.gtbank",
    primaryColor: "#E24407",
    country: "ng",
    ui: {
      title: "Log in to GTBank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "UserID or Account Number",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "058",
  },
  {
    _id: "5f2d08bf60b92e2888287703",
    name: "Access Bank",
    type: "PERSONAL_BANKING",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Access Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae8ea",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Access Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "accountNo",
              hint: "Account Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "pin",
              hint: "4 Digit Transaction Pin",
              contentType: "password",
              maxLength: 4,
            },
          ],
        },
        _id: "60d071adf73e6468062ae8f0",
      },
    ],
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/access-bank-icon.png",
    identifier: "mono.connections.access_bank",
    primaryColor: "#004085",
    country: "ng",
    ui: {
      title: "Log in to Access Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "044",
  },
  {
    _id: "5f2d08bf60b92e2888287704",
    name: "Kuda Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/kuda-bank-icon.png",
    identifier: "mono.connections.kudabank",
    primaryColor: "#40196D",
    forgotPasswordLink: "https://app.kudabank.com/login",
    timeout: 35000,
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Kuda Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email Address",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae8f8",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Kuda Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "090267",
  },
  {
    _id: "5f2d08bf60b92e2888287705",
    name: "Standard Chartered",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/standard-charter-bank-icon.png",
    identifier: "mono.connections.standard.charter",
    primaryColor: "#2E5266",
    forgotPasswordLink:
      "https://retail.sc.com/afr/ibank/ng/foa/ral_tnc.htm?t=3-2-2AEC38DB7AD1EB77F1D33E5E627BADE4&a=doInitForgotUsrNamePasswd",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Standard Chartered",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae8fe",
      },
    ],
    ui: {
      title: "Log in to Standard Chartered",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "068",
  },
  {
    _id: "5f2d08c060b92e2888287706",
    name: "Stanbic IBTC Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/stanbic-bank-icon.png",
    identifier: "mono.connections.stanbic.ibtc.bank",
    primaryColor: "#094E93",
    forgotPasswordLink:
      "https://ibanking.stanbicibtcbank.com/#/auth/reset-password",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Stanbic IBTC Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Login User ID",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae904",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Stanbic IBTC Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "221",
  },
  {
    _id: "5f2d08c060b92e2888287707",
    name: "First Bank",
    type: "PERSONAL_BANKING",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to First Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
            {
              type: "elements.captcha_input",
              name: "captcha",
              hint: "Enter digits shown in the picture",
              contentType: "string",
              maxLength: 4,
            },
          ],
        },
        _id: "60d071adf73e6468062ae90a",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to First Bank",
          form: [
            {
              type: "elements.input",
              name: "mPin",
              hint: "Type your First Bank M-PIN",
              contentType: "password",
              maxLength: 5,
            },
            {
              type: "elements.input",
              name: "card",
              hint: "ATM Card Number",
              contentType: "password",
            },
            {
              type: "elements.input",
              name: "pin",
              hint: "ATM card PIN",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae912",
      },
    ],
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/first-bank-icon.png",
    identifier: "mono.connections.firstbank",
    primaryColor: "#162E4D",
    country: "ng",
    ui: {
      title: "Log in to First Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
        {
          type: "elements.captcha_input",
          name: "captcha",
          hint: "Enter digits shown in the picture",
          contentType: "string",
          maxLength: 4,
        },
      ],
    },
    bank_code: "011",
  },
  {
    _id: "5f2d08c060b92e2888287708",
    name: "FCMB",
    type: "PERSONAL_BANKING",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to FCMB",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae916",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to FCMB",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae91c",
      },
    ],
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/fcmb-bank-icon.png",
    identifier: "mono.connections.fcmb",
    primaryColor: "#5C2682",
    forgotPasswordLink: " https://ibank.fcmb.com/ResetPasswordUI.aspx",
    country: "ng",
    ui: {
      title: "Log in to FCMB",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "214",
  },
  {
    _id: "5f2d08c060b92e288828770b",
    name: "Zenith Bank",
    type: "PERSONAL_BANKING",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Zenith Bank",
          form: [
            {
              type: "elements.switch",
              name: "authType",
              contentType: "integer",
              options: [
                {
                  label: "Password",
                  value: 1,
                  events: {
                    onChange: {
                      effects: [{ name: "password", hint: "Password" }],
                    },
                  },
                },
                {
                  label: "PIN + Token",
                  value: 2,
                  events: {
                    onChange: {
                      effects: [{ name: "password", hint: "PIN + Token" }],
                    },
                  },
                },
              ],
            },
            {
              type: "elements.input",
              name: "username",
              hint: "Account Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae922",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Zenith Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Account Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
              maxLength: 6,
            },
          ],
        },
        _id: "60d071adf73e6468062ae92a",
      },
    ],
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/zenith-bank-icon.png",
    identifier: "mono.connections.zenith",
    primaryColor: "#E3000F",
    timeout: 50000,
    forgotPasswordLink:
      "https://ibank.zenithbank.com/InternetBanking/App/Security/forgotpassword",
    country: "ng",
    ui: {
      title: "Log in to Zenith Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "057",
  },
  {
    _id: "5f2d08c060b92e288828770c",
    name: "Fidelity Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/fidelity-bank-icon.png",
    identifier: "mono.connections.fidelity_bank",
    primaryColor: "#081A6F",
    forgotPasswordLink: "https://online.fidelitybank.ng/#/reg/forgot-password",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Fidelity Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae930",
      },
    ],
    ui: {
      title: "Log in to Fidelity Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "070",
  },
  {
    _id: "5f4564adbd54db725df6e2df",
    name: "GTBank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/gtbank-icon.png",
    identifier: "mono.connections.gtbank",
    primaryColor: "#E24407",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to GTBank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "accessCode",
              hint: "Access Code",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071adf73e6468062ae936",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to GTBank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "accessCode",
              hint: "Access Code",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae93e",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to GTBank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "058",
  },
  {
    _id: "5f56783c46eda834b0846c67",
    name: "United Bank For Africa",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/united-bank-africa-icon.png",
    identifier: "mono.connections.uba",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to United Bank For Africa",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "User ID",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae946",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to United Bank For Africa",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Phone Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae94c",
      },
    ],
    primaryColor: "#DF0D00",
    forgotPasswordLink:
      "https://ibank.ubagroup.com/obng/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&ACTION.LOAD=Y&__CALL_MODE__=51&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=NG&USER_PRINCIPAL=&REMEMBER_USER_ID=&LANGUAGE_ID=001",
    country: "ng",
    ui: {
      title: "Log in to United Bank For Africa",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "033",
  },
  {
    _id: "5f2d08c160b92e288828770e",
    name: "Wallets Africa",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/wallets-icon.png",
    identifier: "mono.connections.wallets.africa",
    primaryColor: "#00C9B6",
    forgotPasswordLink: "https://app.wallets.africa/forgotpassword",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Wallets Africa",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email/Phone/Account ID",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae952",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Wallets Africa",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "035",
  },
  {
    _id: "5f56783d46eda834b0846c68",
    name: "Union Bank of Nigeria",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/union-bank-icon.png",
    identifier: "mono.connections.union.bank",
    primaryColor: "#009FDF",
    forgotPasswordLink:
      "https://uniononline.unionbankng.com/OnlineBanking/nsec/passrests.doo",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Union Bank of Nigeria",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae958",
      },
    ],
    ui: {
      title: "Log in to Union Bank of Nigeria",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "032",
  },
  {
    _id: "5f5a530b0221b6559aadf14b",
    name: "Sterling Bank",
    type: "PERSONAL_BANKING",
    auth_methods: [
      {
        type: "mobile_banking",
        name: "Sterling OneBank",
        ui: {
          title: "Log in to Sterling OneBank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Phone Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae96a",
      },
    ],
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/sterling-bank-icon.png",
    identifier: "mono.connections.sterling",
    primaryColor: "#db3f48",
    forgotPasswordLink:
      "https://sterlingonline.sterlingbankng.com/signup/forgot-password",
    country: "ng",
    ui: {
      title: "Log in to Sterling Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "232",
  },
  {
    _id: "61813c72533d2aa13f539c49",
    name: "Sterling Bank",
    type: "BUSINESS_BANKING",
    bankCode: "232",
    forgotPasswordLink: "https://sterlingpro.sterling.ng",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/sterling-bank-icon.png",
    identifier: "mono.connections.sterling",
    primaryColor: "#db3f48",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Sterling Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "61813cd91235c3410b8c0293",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Sterling Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "232",
  },
  {
    _id: "5f5b530a67ffc15e5911e0d2",
    name: "ALAT by WEMA",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/alat-bank-icon.png",
    identifier: "mono.connections.alat_bank",
    primaryColor: "#ab2656",
    forgotPasswordLink: "https://online.alat.ng/forgot-password",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Alat Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email Address/Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae970",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to ALAT by WEMA",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "035A",
  },
  {
    _id: "603606cf0de2f832ee2d2bb1",
    name: "ALAT by WEMA",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/alat-bank-icon.png",
    identifier: "mono.connections.alat_bank",
    primaryColor: "#ab2656",
    forgotPasswordLink: "https://business.alat.ng/Auth/ForgotPassword",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to ALAT by WEMA",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae976",
      },
    ],
    ui: {
      title: "Log in to ALAT by WEMA",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "035A",
  },
  {
    _id: "5f61bd14f525f731e3a66210",
    name: "Polaris Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/polaris-bank-icon.png",
    identifier: "mono.connections.polaris",
    primaryColor: "#8031a7",
    forgotPasswordLink:
      "https://elogin.polarisbanklimited.com/index/public/skyeplus.html?module=forgot-password",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Polaris Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae97c",
      },
    ],
    ui: {
      title: "Log in to Polaris Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "076",
  },
  {
    _id: "61118329b6ab45e84e8c9b8f",
    name: "United Bank For Africa",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/united-bank-africa-icon.png",
    identifier: "mono.connections.uba",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to United Bank For Africa",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "User ID",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae946",
      },
    ],
    primaryColor: "#DF0D00",
    forgotPasswordLink:
      "https://ibank.ubagroup.com/obng/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__EVENT_ID__=LOAD&ACTION.LOAD=Y&__CALL_MODE__=51&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=NG&USER_PRINCIPAL=&REMEMBER_USER_ID=&LANGUAGE_ID=001",
    country: "ng",
    ui: {
      title: "Log in to United Bank For Africa",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "033",
  },
  {
    _id: "5f649377fc5cb9209956965a",
    name: "Zenith Bank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/zenith-bank-icon.png",
    identifier: "mono.connections.zenith",
    primaryColor: "#E3000F",
    forgotPasswordLink:
      "https://ibank.zenithbank.com/InternetBanking/App/Security/forgotpassword",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Zenith Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "pin",
              hint: "PIN",
              contentType: "password",
            },
            {
              type: "elements.input",
              name: "token",
              hint: "Token Code",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae982",
      },
    ],
    ui: {
      title: "Log in to Zenith Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "pin",
          hint: "PIN",
          contentType: "password",
        },
        {
          type: "elements.input",
          name: "token",
          hint: "Token Code",
          contentType: "password",
        },
      ],
    },
    bank_code: "057",
  },
  {
    _id: "5f6d78d9a1c68d5049673554",
    name: "Ecobank Nigeria",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/ecobank-icon.png",
    identifier: "mono.connections.eco_bank",
    primaryColor: "#005B82",
    forgotPasswordLink:
      "https://ecobankonline.ecobank.com/?module=forgot-password",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Ecobank Nigeria",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae98a",
      },
    ],
    ui: {
      title: "Log in to Ecobank Nigeria",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "050",
  },
  {
    _id: "61812d91d8f2bd8a5953c796",
    name: "Ecobank Nigeria",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/ecobank-icon.png",
    identifier: "mono.connections.ecobank",
    primaryColor: "#005B82",
    forgotPasswordLink:
      "https://ecobankonline.ecobank.com/?module=forgot-password",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to EcoBank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae98a",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Ecobank Nigeria",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "050",
  },
  {
    _id: "5f6de706800d071e5566ef7d",
    name: "Access Bank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/access-bank-icon.png",
    identifier: "mono.connections.access_bank",
    primaryColor: "#004085",
    forgotPasswordLink: "https://ibank.accessbankplc.com/RetailBank",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Access Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae990",
      },
      {
        type: "primus_plus",
        name: "PrimusPlus",
        ui: {
          title: "Log in to Access Bank PrimusPlus",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Enter Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae996",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Access Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "044",
  },
  {
    _id: "5f6de706800d071e5566ef7e",
    name: "Fidelity Bank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/fidelity-bank-icon.png",
    identifier: "mono.connections.fidelity_bank",
    primaryColor: "#081A6F",
    forgotPasswordLink: "https://online.fidelitybank.ng/#/reg/forgot-password",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Fidelity Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae99c",
      },
    ],
    ui: {
      title: "Log in to Fidelity Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "070",
  },
  {
    _id: "5f742b0ad8a14a3785368900",
    name: "Flutterwave",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/flutterwave-icon.png",
    identifier: "mono.connections.flutterwave",
    primaryColor: "#f5a623",
    forgotPasswordLink: "https://dashboard.flutterwave.com/reset",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Flutterwave",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email address",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae9a2",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Flutterwave",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
  {
    _id: "5f746565fc2bdd61f63d4cc9",
    name: "Paystack",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/paystack-icon.png",
    identifier: "mono.connections.pg.paystack",
    primaryColor: "#09A5DB",
    forgotPasswordLink:
      "https://dashboard.paystack.com/#/request-password-reset",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Paystack",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email address",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae9a8",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Paystack",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
  {
    _id: "5f8191b2a80d1d16e57dec14",
    name: "FCMB",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/fcmb-bank-icon.png",
    identifier: "mono.connections.fcmb",
    primaryColor: "#5C2682",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to FCMB",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae9ae",
      },
    ],
    ui: {
      title: "Log in to FCMB",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "214",
  },
  {
    _id: "5f846616174310299da03e11",
    name: "First Bank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/first-bank-icon.png",
    identifier: "mono.connections.firstbank",
    primaryColor: "#162E4D",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to First Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
            {
              type: "elements.captcha_input",
              name: "captcha",
              hint: "Enter digits shown in the picture",
              contentType: "string",
              maxLength: 4,
            },
          ],
        },
        _id: "60d071aef73e6468062ae9b4",
      },
    ],
    ui: {
      title: "Log in to First Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
        {
          type: "elements.captcha_input",
          name: "captcha",
          hint: "Enter digits shown in the picture",
          contentType: "string",
          maxLength: 4,
        },
      ],
    },
    bank_code: "011",
  },
  {
    _id: "5fd0e43ed0c17054e2854730",
    name: "Jaiz Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/jaiz-bank-icon.png",
    identifier: "mono.connections.jaiz",
    primaryColor: "#383e4b",
    forgotPasswordLink:
      "https://ibank.jaizbankplc.com/eBankingIndividual/forgot-password.aspx",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Jaiz Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "User ID",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
            {
              type: "elements.input",
              name: "token",
              hint: "Token",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae9bc",
      },
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Jaiz Bank",
          form: [
            {
              type: "elements.input",
              name: "accountNumber",
              hint: "Your account number",
              contentType: "string",
              maxLength: 10,
            },
            {
              type: "elements.input",
              name: "username",
              hint: "Enter your username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Enter your password",
              contentType: "password",
            },
          ],
        },
        _id: "61407e41b9d748676ec6a4d8",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Jaiz Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
        {
          type: "elements.input",
          name: "token",
          hint: "OTP (Token)",
          contentType: "password",
        },
      ],
    },
    bank_code: "301",
  },
  {
    _id: "5f860021e0df8262652b6770",
    name: "Stanbic IBTC Bank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/stanbic-bank-icon.png",
    identifier: "mono.connections.stanbic.ibtc.bank",
    primaryColor: "#094E93",
    forgotPasswordLink:
      "https://ibanking.stanbicibtcbank.com/#/auth/reset-password",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Stanbic IBTC Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Login User ID",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9c4",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Stanbic IBTC Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "221",
  },
  {
    _id: "5f2d08c160b92e288828770e",
    name: "Wallets Africa",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/wallets-icon.png",
    identifier: "mono.connections.wallets.africa",
    primaryColor: "#00C9B6",
    forgotPasswordLink: "https://app.wallets.africa/forgotpassword",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Wallets Africa",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aef73e6468062ae952",
      },
    ],
    ui: {
      title: "Log in to Wallets Africa",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "035",
  },
  {
    _id: "5fcff401a0b9a12e2790b189",
    name: "Unity Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/unity-bank-icon.png",
    identifier: "mono.connections.unity",
    primaryColor: "#94B150",
    forgotPasswordLink:
      "https://unityonline.unitybankng.com/signup/forgot-password",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Unity Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9cf",
      },
    ],
    ui: {
      title: "Log in to Unity Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "215",
  },
  {
    _id: "5f2d08c060b92e2888287709",
    name: "Piggyvest",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/piggyvest-icon.png",
    identifier: "mono.connections.piggyvest",
    primaryColor: "#083e9e",
    forgotPasswordLink: "https://app.piggyvest.com/forgot",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Piggyvest",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email/Phone Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9d5",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Piggyvest",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "035",
  },
  {
    _id: "5f2d08c060b92e288828770a",
    name: "Cowrywise",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/cowrywise-icon.png",
    identifier: "mono.connections.cowrywise",
    primaryColor: "#0066f5",
    forgotPasswordLink: "https://my.cowrywise.com/forgot-password",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Cowrywise",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email Address",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9db",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Cowrywise",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
  {
    _id: "5f2d08c060b92e288828770d",
    name: "Barter",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/barter-icon.png",
    identifier: "mono.connections.barter",
    primaryColor: "#f5a623",
    forgotPasswordLink: "https://barter.me/forgotpassword",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Barter",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email/Phone Number",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9e1",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Barter",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
  {
    _id: "60520927c8fc8b2e58411d4f",
    name: "VULTe Digital Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/vulte-bank-icon.png",
    identifier: "mono.connections.vulte",
    primaryColor: "#dfa226",
    forgotPasswordLink: "https://vulte.ng/login",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to VULTe Digital Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username/Email",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9ed",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to VULTe Digital Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "076",
  },
  {
    _id: "60152bef3ffc4355f04fce93",
    name: "Heritage Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/heritage-bank-icon.png",
    identifier: "mono.connections.heritage",
    primaryColor: "#4fc143",
    forgotPasswordLink:
      "https://ebank.hbng.com/hibibanking/HomePages/GetMyPasswordUI",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Heritage Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062ae9f3",
      },
    ],
    ui: {
      title: "Log in to Heritage Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "030",
  },
  {
    _id: "601d6087b2568f1b7f861594",
    name: "Keystone Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/keystone-bank-icon.png",
    identifier: "mono.connections.keystone",
    primaryColor: "#1bbae1",
    forgotPasswordLink:
      "https://ibank.keystonebankng.com/ibank/resetpassword.jsp",
    auth_methods: [
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Keystone Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
            {
              type: "elements.input",
              name: "pin",
              hint: "4 Digit Transaction Pin",
              contentType: "password",
              maxLength: 4,
            },
          ],
        },
        _id: "60d071aff73e6468062ae9f9",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Keystone Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "082",
  },
  {
    _id: "603011ce8f7e2f4a3a6346d2",
    name: "Providus Bank",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/providus-bank-icon.png",
    identifier: "mono.connections.providus",
    primaryColor: "#fbb900",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Providus Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062aea01",
      },
    ],
    ui: {
      title: "Log in to Providus Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "101",
  },
  {
    _id: "6112591e75430f68718902aa",
    name: "Providus Bank",
    type: "PERSONAL_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/providus-bank-icon.png",
    identifier: "mono.connections.providus",
    primaryColor: "#fbb900",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Providus Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062aea01",
      },
    ],
    ui: {
      title: "Log in to Providus Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "101",
  },
  {
    _id: "60c4bdcab95548b24fd11a64",
    name: "Brass",
    type: "BUSINESS_BANKING",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/brass_logo.jpeg",
    identifier: "mono.connections.brass",
    forgotPasswordLink: "https://app.trybrass.com/auth/reset",
    primaryColor: "#3e7eee",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Brass",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "60d071aff73e6468062aea07",
      },
    ],
    country: "ng",
    ui: {
      title: "Log in to Brass",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "035",
  },
  {
    _id: "6177df33cda94ee0f96e9ede",
    name: "Globus Bank",
    type: "BUSINESS_BANKING",
    forgotPasswordLink:
      "https://cib.globusbank.com/Authentication/ForgotCredentials",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/globus-bank-icon.jpeg",
    identifier: "mono.connections.globus",
    primaryColor: "#FF0033",
    country: "ng",
    auth_methods: [
      {
        type: "internet_banking",
        name: "Internet Banking",
        ui: {
          title: "Log in to Globus Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "6177ded2cda94ee0f96e9edd",
      },
    ],
    ui: {
      title: "Log in to Globus Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "103",
  },
  {
    _id: "618122a74cc08429a984917b",
    name: "Globus Bank",
    type: "PERSONAL_BANKING",
    forgotPasswordLink:
      "https://cib.globusbank.com/Authentication/ForgotCredentials",
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/globus-bank-icon.jpeg",
    identifier: "mono.connections.globus",
    primaryColor: "#FF0033",
    country: "ng",
    auth_methods: [
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Globus Bank",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "618123a6bb18013587bdefb5",
      },
    ],
    ui: {
      title: "Log in to Globus Bank",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: "103",
  },
  {
    _id: "618ba847f1be196145602f04",
    name: "Chaka",
    bankCode: null,
    forgotPasswordLink: null,
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/chaka-icon.png",
    identifier: "mono.connections.chaka",
    primaryColor: "#3FA0D9",
    type: "PERSONAL_BANKING",
    country: "ng",
    sandbox: { account_type: "investment_account" },
    auth_methods: [
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Chaka",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Username",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "618baab56c4540345be38425",
      },
    ],
    ui: {
      title: "Log in to Chaka",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
  {
    _id: "618ba847f1be196145602f05",
    name: "Risevest",
    bankCode: null,
    forgotPasswordLink: null,
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/risevest-icon.png",
    identifier: "mono.connections.risevest",
    primaryColor: "#13aeb8",
    type: "PERSONAL_BANKING",
    country: "ng",
    sandbox: { account_type: "investment_account" },
    auth_methods: [
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Risevest",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "618baab56c4540345be3842b",
      },
    ],
    ui: {
      title: "Log in to Risevest",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
  {
    _id: "618ba847f1be196145602f06",
    name: "Trove",
    bankCode: null,
    forgotPasswordLink: null,
    icon: "https://mono-public-bucket.s3.eu-west-2.amazonaws.com/images/trove-icon.png",
    identifier: "mono.connections.trove",
    primaryColor: "#2dd882",
    type: "PERSONAL_BANKING",
    country: "ng",
    sandbox: { account_type: "investment_account" },
    auth_methods: [
      {
        type: "mobile_banking",
        name: "Mobile Banking",
        ui: {
          title: "Log in to Trove",
          form: [
            {
              type: "elements.input",
              name: "username",
              hint: "Email",
              contentType: "string",
            },
            {
              type: "elements.input",
              name: "password",
              hint: "Password",
              contentType: "password",
            },
          ],
        },
        _id: "618baab56c4540345be38431",
      },
    ],
    ui: {
      title: "Log in to Trove",
      form: [
        {
          type: "elements.input",
          name: "username",
          hint: "Username",
          contentType: "string",
        },
        {
          type: "elements.input",
          name: "password",
          hint: "Password",
          contentType: "password",
        },
      ],
    },
    bank_code: null,
  },
];

export const MOCK_ACCOUNTS = [
  {
    accountNumber: "0001557338",
    name: "NAME ON ACCOUNT",
    type: "CURRENT_ACCOUNT",
    currency: "NGN",
    status: "active",
    balance: 14457,
  },
  {
    accountNumber: "0001557339",
    name: "NAME ON ACCOUNT",
    type: "CURRENT_ACCOUNT",
    currency: "USD",
    status: "active",
    balance: 17457,
  },
];
