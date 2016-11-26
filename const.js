'use strict';

// Wit.ai parameters
process.env.WIT_TOKEN = '3QTCX3NWIZ76GWHNZBSY4PGHWJ62NQX6';
process.env.FB_PAGE_TOKEN = 'EAAZAsw9N6e2sBAKtvK8wZBi8CuZCpdPJJgMSPrZC9clHTMYSC6cZBlNc1ohurruhIO1UhFXhjZBmL3cGwn64LgZAhiGol2ZCzdUgMyTjaRHrEivzks7h0VQHiwXhSZASyFdrg02L4h7KxtxvmQ6uojYXVXFZAV5nfqIBiswu8KNLhrWQZDZD';
process.env.FB_VERIFY_TOKEN = 'c65587bc3b9ee5ae8eecaa009f22b5c5';
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
