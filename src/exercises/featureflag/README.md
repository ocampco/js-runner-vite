```js
function fetchAllFeatures() {
  return new Promise((resolve, reject) => {
    const sampleFeatures = {
      'extended-summary': true,
      'feedback-dialog': false,
    };

    setTimeout(resolve, 100, sampleFeatures);
  });
}

const getFeatureState = async (featureName) => {
  // TODO
};

getFeatureState('extended-summary').then((isEnabled) =>
  isEnabled ? showExtendedSummary() : showBriefSummary(),
);
```
