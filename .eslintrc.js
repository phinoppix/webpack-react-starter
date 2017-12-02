module.exports = {
	 "extends": "airbnb",
   "parser": "babel-eslint",
   "env": {
     "browser": true
   },
   "rules": {
     "react/require-default-props": "off",
     "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "a" ],
        "specialLink": [ "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
      }]
   }
};
