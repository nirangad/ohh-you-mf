import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

export default config; 