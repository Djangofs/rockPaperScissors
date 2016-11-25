//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'components/**/*.js',
      'components/rpsEngine/rpsEngine.js',
      'components/rpsEngine/rpsEngine_test.js',
      'homeView/**/*.js',
      'components/**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      "components/**/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      // the name of the Angular module to create
      moduleName: "rps.directives"
    },

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
