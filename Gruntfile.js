'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: "jekyll serve"
                //command: 'jekyll serve'
            }
        },

         uglify: {
            my_target: {
                files: {
                'assets/js/script.miny.js': [
                    //'assets/js/scripts/jquery.fancybox.pack.js',
                    //'assets/js/scripts/jquery.flexslider-custom.js',
                    //'assets/js/scripts/typed.js',
                    //'assets/js/scripts/jquery.fitvids.js',
                    'assets/js/svg4everybody.min.js',
                    'assets/js/scripts/main.js']
                }
            }
        },

        // Configuration to be run (and then tested).
        styledown: {
            simple_css: {
                files: {
                    'styleguide/index.html': ['assets/css/style.css']
                },

                options: {
                    sg_css: null,
                    sg_js: null,
                    config: 'styleguide/config.md'
                },

            },

        },

        svgmin: {
            dist: {
              files: [{
                expand: true,
                cwd: 'svg/',
                src: ['*.svg'],
                dest: 'svg/'
              }]
            },
            options: {
              plugins: [
                  { removeViewBox: false },               // don't remove the viewbox attribute from the SVG
                  { removeEmptyAttrs: false }             // don't remove Empty Attributes from the SVG
              ]
            }
          },

        svgstore: {
            options: {
              prefix : 'shape-', // This will prefix each ID
              cleanup: ['fill', 'style'],
              includedemo: true,
              svg: {
                //style: "display: none;",
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:xlink': 'http://www.w3.org/1999/xlink'
              }
            },
            default: {
                files: {
                    "img/svg-defs.svg":
                        ["svg/*.svg"],
                    "_includes/svg-defs.svg":
                        ["svg/*.svg"],
                },
            },
          },

        // watch for files to change and run tasks when they do
        watch: {
           	options: {
                livereload: true,
            },

            site: {
         		files: ["*.md", "_layouts/*.html", "_posts/*.md", "_videos/*.html", "_music/*.html", "svg.html", "_includes/*.html"],
                tasks: ["shell:jekyllBuild"]
         	},

            sass: {
                files: ['assets/css/**/*.{scss,sass}', 'styleguide/*.{scss,sass}'],

                tasks: ['sass', 'styledown', 'shell:jekyllBuild']
            },

            svg: {
                files: ["svg/*.svg"],
                tasks: ["svgmin", "svgstore", "shell:jekyllBuild"]
            },

            uglify: {
                files: 'assets/js/scripts/*.js',
                tasks: ['uglify', "shell:jekyllBuild"]
            }


        },

        // sass (libsass) config
        sass: {
	        options: {
	            sourceMap: true,
                outputStyle: 'nested'//'nested'
	        },
	        dist: {
	            files: {
	                'assets/css/style.css' : 'assets/css/style.scss',
                    'styleguide/styleguide.css' : 'styleguide/styleguide.scss'
	            }
	        }
	    },

        // run tasks in parallel
        concurrent: {
            serve: [
                //'sass',
                //'svgmin',
                //'svgstore',
                'uglify',
                //'styledown',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true,
                limit: 6
            }
        },

    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
