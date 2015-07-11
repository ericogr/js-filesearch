module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
	    	files: {
	    		cwd: 'src',
	    		src: '**/*.js',
	        	dest: 'dist',
	        	expand: true
	     	}
		 },

        jshint: {
            dev: {        
                src: ['src/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);
};