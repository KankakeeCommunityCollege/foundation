# KCC Foundation Website

> Jekyll + Webpack + Babel + Corejs + Sass + Autoprefixer + etc.

A GitHub repo for the KCC Foundation website (<https://www.kcc.edu/foundation/>.)

-----

## Requirements

 - Jekyll & Bundler:
```shell
$ gem install jekyll
$ gem install bundler
```
 - Nodejs/npm - We use NVM (Node Version Manager): <https://github.com/creationix/nvm>
   - .nvmrc file in this repo will make NVM use the Node version listed in `.nvmrc` (to avoid compatibility issues)
   - Or, if you must - Use the Nodejs installer: <https://nodejs.org/>
 - Webpack 5

The ruby version for this project is specified in the `.ruby-version` file.

-----

<br>

## Installation

```bash
git clone git@github.com:KankakeeCommunityCollege/foundation.git
cd foundation
bundle i && npm i

## Or if you like the longer commands:
bundle install && npm install
```

-----

<br>

## Development

Use the following npm script (defined in `package.json`) to run a development build:

```bash
npm run development
```

**Do not push files created form a development build to GitHub.**

The development build watches for file changes; use <kbd>control</kbd> + <kbd>c</kbd> to end the running processes.

The development build injects the compiled CSS into `<style>` tags in the document's `<head>`. This improves the performance of the development build but is not suitable for production.

A development build also creates a dev JS bundle which is better for debugging purposes and also not suitable for production.

-----

<br>

## Production

```bash
npm run production
```

The production build also watches for file changes; use <kbd>control</kbd> + <kbd>c</kbd> to end the running processes.

Production build minifies CSS and JavaScript and compresses image files.

-----

<br>

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

-----

<br>

## Accessibility testing with Pa11y

Pa11y is used for automated and manual accessibility testing.

### Automated testing

The GitHub repo uses an action to automatically run pa11y after every commit to the `master` branch. This helps catch
things like missing alt text or other issues introduced by non-technical editors of the site in CloudCannon.

### Manual testing

`pa11y` and `pa11y-ci` are used in the local project files to test for accessibility issues. The `pa11y` script will run
on a local build of the project and test the files in `_site/` for accessibility issues. The `pa11y-ci` script runs using
the live `sitemap.xml` file of the website.

At this time, **the `pa11y-ci` script picks up more issues than the plain `pa11y` script.** The `pa11y` script doesn't seem to render or test all the dynamic content built with JavaScript so `pa11y-ci` will usually give more accurate results. The hope is to get `pa11y` configured better so that JS is rendered and dynamic content tested.

```bash
## Run pa11y on the local build
npm run test:pa11y
## Run pa11y-ci on the live sitemap
npm run test:pa11y-ci
```

Both scripts take the same arguments:

| Argument | Name | Description |
| ---------|------|-------------|
| `-o`     | Output     | Output the results to a log file (`pa11y-log.*.txt` and `pa11y-ci-log.*.txt`) |
| `-s`     | Skip build | Skip doing a Jekyll build prior to running `pa11y` (does not apply to `pa11y-ci`) |

Examples:

```bash
# Pa11y examples:
## Run pa11y and output the results to a log file
npm run test:pa11y -- -o
## Run pa11y, skip the jekyll build, and output the results to a log file
npm run test:pa11y -- -s -o

# Pa11y CI examples:
## Run pa11y-ci and output the results to a log file
npm run test:pa11y-ci -- -o
## This script does the same as passing the `-o` flag to `test:pa11-ci`
npm run test:pa11y-ci-log
```

### `pa11y-ci-sitemap.xml`

Since the sitemap contains PDF files, there is a separate sitemap file for use with `pa11y-ci` that excludes them.
The file `pa11y-ci-sitemap.xml` is used for this purpose. You can run `pa11y-ci` against the standard `sitemap.xml`
file but it will take a lot longer and the resulting PDF errors are not helpful.

### Pa11y CI logs/reporting

When running `npm run test:pa11y-ci -- -o` or `npm run test:pa11y-ci-log`, the log file is created in the `./pa11y-ci-logs/` folder. These logs *should* be committed to GitHub to document our ongoing accessibility testing and results.

**If any errors are found, the log file should be duplicated with the filename suffix `_remediation.txt` and the fix documented there.**
