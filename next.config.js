/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/variables.module.scss";`,
    "plugins": ["styled-jsx/babel"]
  }
};

module.exports = nextConfig;
