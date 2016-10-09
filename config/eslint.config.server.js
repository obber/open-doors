module.exports = {
  "extends": "airbnb",
  "rules": {
    "key-spacing": ["error", {
      "align": "colon"
    }],
    "no-multi-spaces": ["error", {
      "exceptions": { 
        "VariableDeclarator": true
      }
    }],
    "comma-dangle": ["error", "never"],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "new-cap": "off"
  }
}
