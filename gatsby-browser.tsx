const React = require('react');
const AuthProvider = require('./src/context/auth.context').AuthProvider;
require('./src/styles/main.scss');

exports.wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};
