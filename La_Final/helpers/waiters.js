function waitForProductsReload(selector, previousCount) {
  return browser.waitUntil(
    async () => {
      const currentCount = await selector.length;
      return currentCount !== previousCount;
    },
    {
      timeout: 5000,
      timeoutMsg: 'Products count did not change within 5 seconds',
    }
  );
}

function waitText(selector, expectedText) {
  return browser.waitUntil(async () => {
    const actualText = await selector.getText();
    return actualText.includes(expectedText);
  });
}

// function waitForAttributeChanged(selector, attribute, startValue, finishValue) {
//   return browser.waitUntil(
//     async () => {
//       let element = await selector(startValue);
//       const attributeValue = await element.getAttribute(attribute);
//       return attributeValue === finishValue;
//     },
//     {
//       timeout: 10000,
//       timeoutMsg: 'Attribute data-test="sorting_completed" did not change within 10 seconds',
//     }
//   );
// }

function waitForAttributeChanged(selector, attribute, startValue, finishValue) {
  return browser
    .waitUntil(
      async () => {
        const element = await selector;
        const attributeValue = await element.getAttribute(attribute);
        return attributeValue === startValue;
      },
      {
        timeout: 3000,
        timeoutMsg: 'Attribute data-test="sorting_started" did not appear within 3 seconds',
      }
    )
    .then(() => {
      return browser.waitUntil(
        async () => {
          const element = await selector;
          const attributeValue = await element.getAttribute(attribute);
          return attributeValue === finishValue;
        },
        {
          timeout: 3000,
          timeoutMsg: 'Attribute data-test="sorting_completed" did not change within 3 seconds',
        }
      );
    });
}

module.exports = { waitForProductsReload, waitText, waitForAttributeChanged };
