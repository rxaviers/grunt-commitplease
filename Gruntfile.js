/**
 * grunt-commitplease
 *
 * Copyright (c) 2014 Rafael Xavier de Souza
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/**/*.js"
      ],
      options: {
        jshintrc: ".jshintrc",
      }
    },
    dco: {
      current: {
        options: {
          exceptionalAuthors: {
            "rxaviers@gmail.com": "Rafael Xavier de Souza"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-dco");

  grunt.registerTask("default", ["jshint", "dco"]);
};
