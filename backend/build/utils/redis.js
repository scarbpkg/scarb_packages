"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = require("ioredis");
require("dotenv").config();
const redisClient = () => {
    if (process.env.REDIS_URL) {
        connectTimeout: 10000;
        console.log("Redis is connected");
        return process.env.REDIS_URL;
        console.log("Redis is connected");
    }
    throw new Error("Redis connection failed");
};
exports.redis = new ioredis_1.Redis(redisClient());
