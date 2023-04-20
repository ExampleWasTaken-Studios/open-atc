const join = require('path').join;

const root = join(__dirname, '../');

module.exports = {
  appId: 'nz.examplewastaken.open-atc',
  productName: 'OpenATC',
  publish: null,
  nsis: {
    oneClick: true,
  },
  extraFile: [`${root}/server/build/libs/backend.jar`],
};
