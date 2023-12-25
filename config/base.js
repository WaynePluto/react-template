const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')

const UnAudoImport = require('unplugin-auto-import/webpack')

const esbuild = require('esbuild')

const isProduction = process.env.NODE_ENV === 'production'

const stylesHandler = isProduction
  ? {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../',
      },
    }
  : 'style-loader'

const baseCssLoader = [stylesHandler, 'css-loader', 'postcss-loader']

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/main.tsx',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.vue'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts'],
    },
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        use: [
          // ts loader可以从esbuild和swc二选一
          // {
          //   loader: '@swc-node/loader',
          //   options: {
          //     compilerOptions: {
          //       jsx: 'react-jsxdev', // 生产环境使用react-jsx
          //     },
          //   },
          // },
          // 这里选择esbuild
          {
            loader: 'esbuild-loader',
            options: { implementation: esbuild, jsx: 'automatic' },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [...baseCssLoader, 'less-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [...baseCssLoader, 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [...baseCssLoader],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|mp3)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    UnAudoImport({
      dts: true,
      imports: ['react'],
    }),
  ],
}
