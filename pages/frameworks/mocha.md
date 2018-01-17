# Run a Single Test File

If you wanted to run only the test suite that tests the “api”, the command would look like:
```bash
mocha --grep api
```

The spec must have some `describe` or `it` that matches the grep pattern, as in:
```js
describe('api', _ => {
  // ...
})
```

# Run a Single Spec

Often we’re in the test code making changes, and it’s easy to make adjustments to what subset of tests you run from here as well. If I want to run a single `describe()` function, I can add a `.only()` to the function call, like this:

```js
describe(function () {
  // these tests will be skipped
});
describe.only(function () {
  // these tests will run
});
```

You can stick the `.only()` on any `describe`, no matter if it’s first or last in the list of specs.

# Run a Single Test

Just as you can with `describe`, the tests can be specified to exclusively run if you attach `.only()` to the function call.
```js
it.only(function () {
  // this test will run
});
it(function () {
  // this test will be skipped
});
```

# Skip Something

If you want to run all the specs/tests that you have minus some subset, effectively commenting out these tests, you can add `.skip()`to either `describe` or `it` function calls.