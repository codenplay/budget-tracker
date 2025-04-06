import type { Config } from 'jest';

const config: Config ={
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    testPathIgnorePatterns: ['<rootDir>/dist/'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^@models/(.*)$': '<rootDir>/src/models/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1',
        '^@routes/(.*)$': '<rootDir>/src/routes/$1',
        '^@controllers/(.*)$': '<rootDir>/src/controllers/$1'
    },
}


export default config;