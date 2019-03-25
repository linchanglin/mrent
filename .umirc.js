export default {
  // base: '/',
  // publicPath:'./',
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
    plugins: [
      [
        'umi-plugin-react', {
          antd: true,
        }
      ],
    ]
  }
  