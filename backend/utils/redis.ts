import { Redis } from "ioredis";
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

export const redis = new Redis(redisClient());
