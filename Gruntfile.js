module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/init.js',
                    'src/arrays-to-object.js',
                    'src/array-to-object.js',
                    'src/clone-object.js',
                    'src/find-in.js',
                    'src/find-by-dataset-value.js',
                    'src/get-index-by-dataset-value.js',
                    'src/get-index.js',
                    'src/inherit.js',
                    'src/is-array-true.js',
                    'src/map-object.js',
                    'src/map-to-object.js',
                    'src/merge-arrays.js',
                    'src/object-to-array.js',
                    'src/remove-blank-arrays.js',
                    'src/remove-undefined.js',
                    'src/remove-from-object.js',
                    'src/remove-from-array.js',
                    'src/update-object-properties.js',
                    'src/walk-object.js'
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
