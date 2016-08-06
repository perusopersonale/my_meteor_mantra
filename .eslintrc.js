module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "env": {
    "es6": true,
  },
  "plugins": [
    "mocha"
  ],
  "extends": "eslint-config-airbnb",
  "rules": {
    "mocha/no-exclusive-tests": "error",
    // override defaults for rule from base configurations
    "import/no-unresolved": 0, // Mantra imports files automagically
    "no-undef": 0, // Mantra imports files automagically
    "no-underscore-dangle": 0, // mongodb will dangle if it wants to
    "max-len": 0, // Sometimes you just gotta be verbose
  }
}
