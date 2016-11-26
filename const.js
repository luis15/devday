'use strict';

// Wit.ai parameters
process.env.WIT_TOKEN = '3QTCX3NWIZ76GWHNZBSY4PGHWJ62NQX6';
process.env.FB_PAGE_TOKEN = 'EAAZAsw9N6e2sBAKQ4qDWfT4gl3kqQdgMbpcBluzZCWcxbZAfZAqGTkku1bs2wl0j9qSELuu8A9hJ9vQ59boiqEZAf60n85sfebEndSL2cyr2858fKhwQUa8qetvW7knCHDTY8klbLiEyrSdO33xZC44KGBDmkXvWaPn4afKcvcdwZDZD';
process.env.FB_VERIFY_TOKEN = 'ff7fd577a1e6d7eb0458b3380f545afc';
const WIT_TOKEN = process.env.WIT_TOKEN;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};
