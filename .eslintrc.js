module.exports = {
  "extends": ["airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": ["flowtype"],
  "rules": {
    "react/require-default-props": "off",
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["a"],
      "specialLink": ["hrefLeft", "hrefRight"],
      "aspects": ["noHref", "invalidHref", "preferButton"]
    }],
    // "flowtype/boolean-style": [
    //   2,
    //   "boolean"
    // ],
    "flowtype/define-flow-type": 1,
    // "flowtype/delimiter-dangle": 0,
    // "flowtype/generic-spacing": [
    //   2,
    //   "never"
    // ],
    // "flowtype/no-types-missing-file-annotation": 2,
    // "flowtype/no-weak-types": 0,
    // "flowtype/require-parameter-type": 0,
    // "flowtype/require-return-type": 0,
    // "flowtype/require-valid-file-annotation": 0,
    // "flowtype/semi": 0,
    // "flowtype/space-after-type-colon": [
    //   2,
    //   "always"
    // ],
    // "flowtype/space-before-generic-bracket": [
    //   2,
    //   "never"
    // ],
    // "flowtype/space-before-type-colon": [
    //   2,
    //   "never"
    // ],
    // "flowtype/type-id-match": 0,
    // "flowtype/union-intersection-spacing": [
    //   2,
    //   "always"
    // ],
    // "flowtype/use-flow-type": 1,
    // "flowtype/valid-syntax": 1,
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true,
    },
  },
};
