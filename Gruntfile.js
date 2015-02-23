module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    copy: {
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap/dist/js/',
          src: 'bootstrap.min.js',
          dest: '_assets/javascripts/vendor/'
        }]
      },
    },

    uglify: {
      dist: {
        options: {
          compress: true,
          mangle: true,
          preserveComments: false
        },
        files: {
          '_assets/javascripts/vendor/jquery.min.js': ['bower_components/jquery/dist/jquery.js']
        }
      }
    },

    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'rake serve'
      }
    }
  });

  grunt.registerTask('serve', ['copy', 'uglify', 'shell']);
}