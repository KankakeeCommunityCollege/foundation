# KCC Foundation Website

> Jekyll + Webpack + Babel + Corejs + Sass + Autoprefixer + etc.

A GitHub repo for the KCC Foundation website (<https://foundation.kcc.edu>.)

This project's version of Ruby: `ruby-3.1.3`.

-----

## Prerequisites

* [<abbr>RVM</abbr> (Ruby Version Manager)](https://rvm.io/) — See [Installing RVM](https://rvm.io/rvm/install):
  * Install `ruby-2.6.3` via RVM: `rvm install ruby-2.6.3`
  * Set `ruby-2.6.3` as default alias: `rvm alias default ruby-2.6.3`
* [<abbr>NVM</abbr> (Node Version Manager)](https://github.com/nvm-sh/nvm):
  * Every project has an `.nvmrc` file specifying the project's node version.
  * Add the following bash function to your bash initialization files so that you don't have to run `nvm use` when you switch projects. **You must have `cowsay` installed via homebrew (`brew install cowsay`) for this to work**:
  * ```bash
    ## Use a local .nvmrc file if present
    enter_directory() {
      if [[ $PWD == $PREV_PWD ]]; then
        return
      fi

      PREV_PWD=$PWD
      [[ -f ".nvmrc" ]] && nvm use > /dev/null 2>&1 && nvm use | cowsay $n
    }

    export PROMPT_COMMAND=enter_directory
    ```


## Installation

```bash
git clone git@github.com:KankakeeCommunityCollege/foundation.git
cd foundation
bundle i && npm i

## Or if you like the longer commands:
bundle install && npm install
```

## Development

Use the following npm script (defined in `package.json`) to run a development build:

```bash
npm run development
```

**Do not push files created form a development build to GitHub.**

The development build watches for file changes; use <kbd>control</kbd> + <kbd>c</kbd> to end the running processes.

The development build injects the compiled CSS into `<style>` tags in the document's `<head>`. This improves the performance of the development build but is not suitable for production.

A development build also creates a dev JS bundle which is better for debugging purposes and also not suitable for production.

## Production

```bash
npm run production
```

The production build also watches for file changes; use <kbd>control</kbd> + <kbd>c</kbd> to end the running processes.

Production build minifies CSS and JavaScript and compresses image files.

## JS Unit Testing

```bash
npm test

# Or use the longer
npm run test
```

JS unit testing is accomplished using `vitest`.

Test modules are found in the `assets/js/__tests__/` directory.

Test modules should have the same name as the module they test but with a `.test` suffix before the file extension:
* A test for `assets/js/src/<myModule>.js` would be `assets/js/__tests__/<myModule>.test.js`

### `checkDate.test.js`

If you make ***any*** changes to the module `assets/js/src/scholarshipApp/checkDate.js` you need to run the testing script (i.e. `npm run test`.)

This test ensures the scholarship application will be made available from November 1 to May 1.
