"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locations = {
    'New York': '105080838',
    'San Francisco': '90000084',
    'Chicago': '103112676',
    'Los Angeles': '102448103',
    'Miami': '102394087',
    'Philadelphia': '104937023',
    'Atlanta': '106224388',
};
const keywords = {
    'tech recruiter': 'tech%20recruiter',
    'it recruiter': 'it recruiter',
    'software recruiter': 'software recruiter',
    'frontend recruiter': 'frontend recruiter',
    'backend recruiter': 'backend recruiter'
};
const options = {
    url: 'https://www.linkedin.com/',
    viewPortOptions: { width: 1200, height: 900 },
    browserOptions: { headless: false, slowMo: 30, devtools: false },
    connect: false,
    sendMessages: true,
    loginOptions: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    },
    connectOptions: {
        people: 'search/results/people/?geoUrn=%5B"',
        region: locations['Atlanta'],
        beforeKeword: '%22%5D&keywords=',
        keywords: `${keywords['tech recruiter']}`,
        Headers: '%20&origin=GLOBAL_SEARCH_HEADER'
    },
    sendMessagesOptions: {},
    messageOptions: {
        url: 'mynetwork/invite-connect/connections/',
    }
};
exports.default = options;
