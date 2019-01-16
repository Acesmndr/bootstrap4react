const packageInfo = require('./package')
const path = require('path')
const snapguidist = require('snapguidist');
const COMPONENTS = [
  'Avatar',
  'Calendar',
  'Dropdown',
  'Image',
  'Text',
  'Badge',
  'Button',
  'Card',
  'ColumnAndRows',
  'Input',
  'Pagination',
  'Progressbar',
  'Tab',
  'Table',
].map(component => ({
  name: component,
  components: `src/components/${component}/[A-Z]*.js`,
}));
module.exports = snapguidist({
  title: 'Bootstrap4React',
  sections: COMPONENTS,
  require: [
    './src/style/theme.scss',
  ],
  template: {
    // favicon: 'logo/logo.png',
  },
  theme: {
    color: {
      link: '#3D566F',
      linkHover: '#08B89D',
      sidebarBackground: '#F5F7F9'
    },
    fontFamily: {
      base: '"Roboto", "Ubuntu", sans-serif'
    },
    sidebarWidth: '300px',
    fontSize: {
      base: 16,
    },
  },
  styles: {
    Playground: {
      preview: {
      },
    },
    Markdown: {
      code: {
        padding: '2em 2em',
        border: '1px solid rgba(0,0,0,0.05)',
        margin: '10px',
        fontSize: '85%',
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderRadius: '3px'
      }
    },
    StyleGuide: {
      sidebar: {
        zIndex: 2,
      },
      content: {
        maxWidth: '100%'
      }
    }
  },
  exampleMode: 'collapse',
  usageMode: 'collapse',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            "presets": [
              "env",
              "react"
            ],
            "plugins": [
              "transform-object-rest-spread"
            ]
          }
        },
        {
          test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
      ]
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')

    return `import { ${name} } from '${packageInfo.name}'`
  }
});
