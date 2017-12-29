#!/usr/bin/env node

const INPUT = process.argv[2];

const whoops = () => {
    const ERROR_MSG = '\nYo plz pass a valid 24-hr time, like "13:24"\n';
    console.error(ERROR_MSG);
    process.exit(1);
};
//  Basic error handling
if (!INPUT || !INPUT.includes(':')) whoops();

const FRAGMENTS = INPUT.split(':');

const HOURS_INPUT = parseInt(FRAGMENTS[0]);

const MINS_INPUT = FRAGMENTS[1];
const MINS_TENS = MINS_INPUT.split('')[0];
const MINS_ONES = MINS_INPUT.split('')[1];

//  More error handling
if (HOURS_INPUT < 0 || HOURS_INPUT > 23) {
    whoops();
}
if (parseInt(MINS_TENS) < 0 || parseInt(MINS_TENS) > 5) {
    whoops();
}

const NUMBERS_MAP = [
    'twelve',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];

const BIG_NUMBERS_MAP = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
};

let hours, suffix;
let oh = '';
let mins = '';
if (HOURS_INPUT >= 12) {
    hours = NUMBERS_MAP[HOURS_INPUT - 12];
    suffix = 'pm';
} else {
    hours = NUMBERS_MAP[HOURS_INPUT];
    suffix = 'am';
}

if (MINS_TENS === '0') {
    //  set OH (if we need to)
    if (!MINS_ONES === '0') {
        oh = ' oh'
    }
} else if (MINS_TENS === '1') {
    mins = ` ${NUMBERS_MAP[MINS_INPUT]}`;
} else {
    mins = ` ${BIG_NUMBERS_MAP[MINS_TENS]}`;
}

if (MINS_TENS !== '1' && MINS_ONES !== '0') {
    mins += ` ${NUMBERS_MAP[MINS_ONES]}`;
}

/// OUTPUT ///
const OUTPUT = `It's ${hours}${oh}${mins} ${suffix}`;

console.log(`
=================================
${OUTPUT}
=================================
`);
