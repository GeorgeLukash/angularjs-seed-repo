module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    shell: {
      options: {
        stdout: true,
      },
      selenium: {
        command: "./selenium/start",
        options: {
          stdout: false,
          async: true,
        },
      },
      protractor_install: {
        command: "node ./node_modules/protractor/bin/webdriver-manager update",
      },
      npm_install: {
        command: "npm install",
      },
    },

    connect: {
      options: {
        base: "app/",
      },
      webserver: {
        options: {
          port: 8888,
          keepalive: true,
        },
      },
      devserver: {
        options: {
          port: 8888,
        },
      },
      testserver: {
        options: {
          port: 9999,
        },
      },
      coverage: {
        options: {
          base: "coverage/",
          port: 5555,
          keepalive: true,
        },
      },
    },

    protractor: {
      options: {
        keepAlive: true,
        configFile: "./test/protractor.conf.js",
      },
      singlerun: {},
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444,
          },
        },
      },
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc",
      },
      all: ["Gruntfile.js", "app/scripts/{,*/}*.js"],
    },

    concat: {
      styles: {
        dest: "./app/assets/app.css",
        src: [

          'app/styles/app.css',
          'app/scripts/components/todo-rost/add-new-task-component-rost/add-new-task-component-rost.css',
          'app/scripts/components/todo-rost/main-list-component-rost.css',
          'app/scripts/components/todo-rost/create-task-and-filter-component-rost/create-task-and-filter-component-rost.css',
          'app/scripts/components/todo-rost/delete-marked-tasks-component-rost/delete-marked-tasks-component-rost.css',
          'app/scripts/components/Artur/userLoginArtur/userLoginArtur.css',
          'app/scripts/components/Artur/generalAddFormToDoArtur/generalAddFormToDoArtur.css',
          'app/scripts/components/Artur/filtersToDoItemsArtur/filtersToDoItemsArtur.css',
          "app/scripts/components/Orel/mainComponentToDoListOrel/mainComponentToDoListOrel.component.css",
          "app/scripts/components/Orel/addItemToDoListOrel/addItemToDoListOrel.component.css",
          "app/scripts/components/Orel/listOfItemsToDoListOrel/listOfItemsToDoListOrel.component.css",
          "app/scripts/components/Orel/sortItemsToDoListOrel/sortItemsToDoListOrel.component.css",
          //place your Stylesheet files here
          'app/scripts/components/vlad-todo-components/vlad-todo-list-component.css',
          'app/scripts/components/vlad-todo-components/vlad-add-component/vlad-add-component.css',
          'app/scripts/components/vlad-todo-components/vlad-todo-component/vlad-item-component.css',
          'app/scripts/components/vlad-todo-components/vlad-edit-component/vlad-edit-component.css',
        ]
      },
      scripts: {
        options: {
          separator: ";",
        },
        dest: "./app/assets/app.js",
        src: [

          'bower_components/jquery/dist/jquery.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js',
          'bower_components/angular-animate/angular-animate.js',
          'bower_components/popover.js/dist/popover.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'app/scripts/app.js',
          'app/scripts/components/todo-rost/main-list-component-rost.js',
          'app/scripts/components/todo-rost/create-task-and-filter-component-rost/create-task-and-filter-component-rost.js',
          'app/scripts/components/todo-rost/add-new-task-component-rost/add-new-task-component-rost.js',
          'app/scripts/components/todo-rost/delete-marked-tasks-component-rost/delete-marked-tasks-component-rost.js',
          'app/scripts/components/Artur/servicesArtur/authArtur.service.js',
          'app/scripts/components/Artur/mainParentToDoArtur/mainParentToDoArtur.component.js',
          'app/scripts/components/Artur/generalAddFormToDoArtur/generalAddFormToDoArtur.component.js',
          'app/scripts/components/Artur/filtersToDoItemsArtur/filtersToDoItemsArtur.component.js',
          'app/scripts/components/Artur/generalTableToDoArtur/generalTableToDoArtur.component.js',
          'app/scripts/components/Artur/changeToDoItemArtur/changeToDoItemArtur.component.js',
          'app/scripts/components/Artur/userLoginArtur/userLoginArtur.component.js',
          "app/scripts/components/Orel/modules/dailyTasks.module.js",         
          "app/scripts/components/Orel/addItemToDoListOrel/addItemToDoListOrel.component.js",
          "app/scripts/components/Orel/filterItemsToDoListOrel/filterItemsToDoListOrel.component.js",
          "app/scripts/components/Orel/listOfItemsToDoListOrel/listOfItemsToDoListOrel.component.js",
          "app/scripts/components/Orel/mainComponentToDoListOrel/mainComponentToDoListOrel.component.js",
          "app/scripts/components/Orel/sortItemsToDoListOrel/sortItemsToDoListOrel.component.js",
          //place your JavaScript files here
          'app/scripts/components/vlad-todo-components/vlad-todo-list-component.js',
          'app/scripts/components/vlad-todo-components/vlad-add-component/vlad-add-component.js',
          'app/scripts/components/vlad-todo-components/vlad-todo-component/vlad-item-component.js',
          'app/scripts/components/vlad-todo-components/vlad-edit-component/vlad-edit-component.js',
        ]
      },
    },

    watch: {
      options: {
        livereload: 7777
      },
      assets: {
        files: ['app/styles/**/*.css', 'app/scripts/**/*.js', 'app/scripts/**/*.html', 'app/scripts/**/*.css'],

        tasks: ['concat']
      },
      protractor: {
        files: ['app/scripts/**/*.js', 'test/e2e/**/*.js'],
        tasks: ['protractor:auto']
      }
    },

      open: {
        devserver: {
          path: "http://localhost:8888",
        },
        coverage: {
          path: "http://localhost:5555",
        },
      },

      karma: {
        unit: {
          configFile: "./test/karma-unit.conf.js",
          autoWatch: false,
          singleRun: true,
        },
        unit_auto: {
          configFile: "./test/karma-unit.conf.js",
          autoWatch: true,
          singleRun: false,
        },
        coverageReporter: {

          type: 'html',
          dir: 'coverage/'
        }
      },
  });

  //single run tests


  grunt.registerTask('test', ['jshint', 'test:unit', 'test:e2e']);
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:e2e', ['connect:testserver', 'protractor:singlerun']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);
  grunt.registerTask('autotest:e2e', ['connect:testserver', 'shell:selenium', 'watch:protractor']);

  //coverage testing
  grunt.registerTask('test:coverage', ['karma:unit_coverage']);
  grunt.registerTask('coverage', ['karma:unit_coverage', 'open:coverage', 'connect:coverage']);

  //installation-related
  grunt.registerTask('install', ['update', 'shell:protractor_install']);
  grunt.registerTask('update', ['shell:npm_install', 'concat']);


  //defaults
  grunt.registerTask("default", ["dev"]);

  //development
  grunt.registerTask("dev", [
    "update",
    "connect:devserver",
    "open:devserver",
    "watch:assets",
  ]);

  //server daemon
  grunt.registerTask("serve", ["connect:webserver"]);
};
