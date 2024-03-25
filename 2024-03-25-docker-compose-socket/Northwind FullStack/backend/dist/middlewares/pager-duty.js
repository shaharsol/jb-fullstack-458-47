"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagerDuty = void 0;
const pagerDuty = (err, req, res, next) => {
    console.log('doing a pager duty call');
    next(err);
};
exports.pagerDuty = pagerDuty;
