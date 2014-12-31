/**
 * grunt-commitplease
 *
 * Copyright (c) 2014 Rafael Xavier de Souza
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  var commitplease = require("commitplease");
  var Repo = require("git-tools");

  function gitLog(options, callback) {
    var path = options.path || ".";
    var committish = options.committish || "master";
    var delimiter = "---===COMMITPLEASE===---";

    var repo = new Repo(path);

    repo.exec("log", "--format=%H%n%B" + delimiter, committish, function(error, log) {
      if (error) {
        return callback(error);
      }

      var commits = log.trim().split(delimiter);
      commits.pop();
      commits = commits.map(function(commit) {
        var body = commit.trim().split("\n");
        var hash = body.shift();

        return {
          body: body.join("\n"),
          hash: hash
        };
      });

      callback(null, commits);
    });
  }

  grunt.registerMultiTask("commitplease", "Validate strings as jQuery commit messages.", function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      committish: "HEAD",
      path: "."
    });

    gitLog(options, function(error, commits) {
      var errors;

      if (error) {
        grunt.log.error("Internal error " + error.stack);
        return done(error);
      }

      commits.forEach(function(commit) {
        errors = commitplease(commit.body);
        if (errors.length) {
          error = true;
          grunt.log.error( commit.hash );
          errors.forEach(function( error ) {
            grunt.log.error( "-", error );
          });
        }
      });

      if (error) {
        return done(new Error("Commits have invalid messages."));
      }

      grunt.log.ok("All commits have appropriate messages.");
      done();
    });
  });
};
