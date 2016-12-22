# eslint-atom-extraneous-dependency-error
This repo to serve as a test bed for checking if the atom plugin [linter-eslint](https://github.com/AtomLinter/linter-eslint) is properly finding and ignoring certain glob patterns. The specific pattern that I am having problems with is the `import/no-extraneous-dependencies` rule and can be found in the eslint-config-airbnb-base [here](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L72).

# test
  1. git clone this repo
  1. `npm i`
  1. `npm run lint`
    * This should verify that the eslint node module is finding no errors.
  1. Open `test/subFolder/validate.js`
    * This shows that the atom eslint plugin is throwing an `import/no-extraneous-dependencies` error.
