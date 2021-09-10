module.exports = function (grunt) {
  // Grunt Configuration
  grunt.initConfig({
    freeport: {
      acceptance: {
        options: {
          start: 5000,
        },
      },
    },
    express: {
      acceptance: {
        options: {
          script: "build/index.js",
          background: true,
          output: "Server started on PORT:5000",
          port: "<%= freeport.acceptance %>",
        },
      },
    },
    shell: {
      acceptance: {
        command:
          "cucumber-js -f json:cucumber.json src/features/ -r src/steps/ --parallel 3 && node report.js",
        env: {
          PORT: "<%= freeport.acceptance %>",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-freeport");
  grunt.loadNpmTasks("grunt-express-server");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("acceptance", [
    "freeport:acceptance",
    "express:acceptance",
    "shell:acceptance",
  ]);
};
