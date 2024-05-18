const TEXT = {
  ADMIN_TITLE: 'Sales over the years',
  USER_TITLE: 'My account',
  POWER_TOOLS_TITLE: 'Category: Power Tools',
  PLIERS: 'Pliers',
  WOOD_SAW: 'Wood Saw',
  WOOD_SAW_PRICE: '$12.18',
  ADJ_WRENCH: 'Adjustable Wrench',
  ADJ_WRENCH_PRICE: '$20.33',
  ANG_SPANNER: 'Angled Spanner',
  ANG_SPANNER_PRICE: '$14.14',
  OPEN_SPANNERS: 'Open-end Spanners (Set)',
  OPEN_SPANNERS_PRICE: '$38.51',
  SEARCH_SCREW: 'screw',
  SEARCH_SCREW_RES: 'Screw',
  SEARCH_CUT: 'CUT',
  SEARCH_CUT_RES: 'Bolt Cutters',
};

const BUTTON = {
  SIGN_IN: 'Sign In',
  CATEGORIES: 'Categories',
  CAT_POWER_TOOLS: 'Power Tools',
  CAT_HAND_TOOLS: 'Hand Tools',
  CAT_OTHER: 'Other',
  SUBCAT_GRINDER: 'Grinder',
  SUBCAT_SANDER: 'Sander',
  SUBCAT_SAW: 'Saw',
  SUBCAT_DRILL: 'Drill',
  SUBCAT_PLIERS: 'Pliers',
  SUBCAT_HANDSAW: 'Hand Saw',
  SUBCAT_WRENCH: 'Wrench',
  FLTR_NAME_A_Z: 'name,asc',
  FLTR_NAME_Z_A: 'name,desc',
  FLTR_PRICE_HIGH: 'price,desc',
  FLTR_PRICE_LOW: 'price,asc',
};

const DATA = {
  EMAIL_ADMIN: 'admin@practicesoftwaretesting.com',
  PASSWORD_VALID: 'welcome01',
  EMAIL_USER1: 'customer@practicesoftwaretesting.com',
  PASSWORD_USER1: 'welcome01',
  EMAIL_USER2: 'customer1@practicesoftwaretesting.com',
  PASSWORD_USER2: 'welcome01',
  PASSWORD_EMPTY: '',
  PASSWORD_FAIL: 'welcome99',
  PASSWORD_SMALL: '1',
  EMAIL_EMPTY: '',
  EMAIL_FAIL: 'customer99@practicesoftwaretesting.com ',
};

const URL = {
  MAIN_PAGE_URL: 'https://practicesoftwaretesting.com',
  LOGIN_PAGE_URL: 'https://practicesoftwaretesting.com/#/auth/login',
};

const ERROR = {
  PASSWORD_INP: 'password',
  LOGIN_INP: 'login',
  EMAIL_INP: 'email',
  ERR_MSG1: 'Password is required',
  ERR_MSG2: 'Invalid email or password',
  ERR_MSG3: 'Password length is invalid',
  ERR_MSG4: 'Email is required',
  ERR_MSG5: 'Invalid email or password',
  ERR_MSG6: 'Email format is invalid',
  ERR_MSG_LOCK: 'Account locked, too many failed attempts. Please contact the administrator.',
};

const COUNTER = {
  POWTOOLS: 8,
  POWTOOLS_SAW_COUNT: 1,
  POWTOOLS_SAW_GRINDER: 0,
  POWTOOLS_SAW_SANDER: 3,
  POWTOOLS_SAW_DRILL: 4,
  OTHER_PAGES: 2,
  OTHER_1: 9,
  OTHER_2: 6,
  PRODUCT_QUANTITY: 2,
  FIRST_PRODUCT: 0,
  LAST_PRODUCT: 3,
  LAST_PAGE: 'last',
};

module.exports = { TEXT, BUTTON, DATA, URL, ERROR, COUNTER };
