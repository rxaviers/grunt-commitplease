> Validate strings as jQuery commit messages


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-commitplease --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-commitplease');
```


## commitplease task
_Run this task with the `grunt commitplease` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

For more explanations of the errors commitplease will throw at you please visit [jzaefferer/commitplease][].

[jzaefferer/commitplease]: https://github.com/jzaefferer/commitplease

### Options

Any specified option will be passed through directly to [jzaefferer/commitplease][], thus you can specify any option that it supports. See [jzaefferer/commitplease documentation][] for a list of supported options.

[jzaefferer/commitplease documentation]: http://github.com/jzaefferer/commitplease#api

#### path

Type: `String`
Default: `.` ()

The path to the repository.

#### committish

Type: `String`
Default: `HEAD` (current branch)

Committish range to analyze.


## License

MIT © [Rafael Xavier de Souza](http://rafael.xavier.blog.br)
