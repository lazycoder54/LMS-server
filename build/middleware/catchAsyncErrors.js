"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncError = void 0;
const catchAsyncError = (thefunc) => (req, res, next) => {
    Promise.resolve(thefunc(req, res, next)).catch(next);
};
exports.catchAsyncError = catchAsyncError;
