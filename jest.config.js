// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    "globals": {
        "PATH": "http://localhost:8080"
      },
      "testMatch": [
        "**.test.js"
      ],
      moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
      },
}