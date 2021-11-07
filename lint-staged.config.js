module.exports = {
  "*.ts": () => ["yarn tsc -b", "yarn eslint --cache --fix"],
  "*": "prettier -u -w",
};
