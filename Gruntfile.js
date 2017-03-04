module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'vendor/validation/src/is.js',
                    'src/init.js',
                    'src/run-functions.js',
                    'src/chain-methods.js',
                    'src/map-object.js',
                    'src/map-methods.js',
                    'src/arrays-to-object.js',
                    'src/array-to-object.js',
                    'src/walk-object.js',
                    'src/assign-methods-to-object.js',
                    'src/clone-object.js',
                    'src/extend-all-methods.js',
                    'src/extend-method.js',
                    'src/extend-new-method.js',
                    'src/find-in.js',
                    'src/inherit.js',
                    'src/is-array-true.js',
                    'src/listen.js',
                    'src/remove-blank-arrays.js',
                    'src/remove-undefined.js',
                    'src/object-to-array.js',
                    'src/update-object-properties.js',
                    'src/validate-all-properties.js',
                    'src/validate-methods.js',
                    'src/validate-properties.js',
                    'src/verify-all-properties-exist.js',
                    'src/verify-properties-exist.js',
                    'src/export.js'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true, 
                eqnull: true,
                browser: true,
                reporter: 'jslint',
                reporterOutput: 'reports/jshint.xml',
                globals: {
                    jQuery: true
                },
            },
            all: ['src/**/*.js']
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['build-js'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build-js', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('build', ['build-js']);

};
