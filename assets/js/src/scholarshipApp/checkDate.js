// ========================================================================== //
//  This module should be tested EVERY TIME AN EDIT is made to it             //
//                                                                            //
//    JS tests may be found in `./assets/js/__tests__/`:                      //
//      * Test name matches module name but with `.test` added                //
//        (e.g. `checkDate.js` tests are defined in `checkDate.test.js`.)     //
//      * Tests are run using `vitest` via the NPM script                     //
//        outlined in `package.json`:                                         //
//        * `npm run test`                                                    //
// ========================================================================== //
export function checkDate(date) {
  date.setHours(0, 0, 0, 0);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (month < 5 || month === 5 && day === 1 || month >= 10);
}
