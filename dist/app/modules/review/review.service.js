"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewRating.create({
        data: payload,
        include: {
            user: true,
            bookingItem: true,
        },
    });
    return result;
});
const getReviewsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewRating.findMany({
        include: {
            user: true,
            bookingItem: true,
        },
    });
    return result;
});
const getSingleReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewRating.findFirst({
        where: {
            id,
        },
        include: {
            user: true,
            bookingItem: true,
        },
    });
    return result;
});
const updateReviewDataToDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewRating.update({
        where: {
            id,
        },
        include: {
            user: true,
            bookingItem: true,
        },
        data: payload,
    });
    return result;
});
const deleteReviewFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.reviewRating.delete({
        where: {
            id,
        },
        include: {
            user: true,
            bookingItem: true,
        },
    });
    return result;
});
exports.ReviewService = {
    createReview,
    getReviewsFromDB,
    getSingleReview,
    updateReviewDataToDB,
    deleteReviewFromDB,
};
