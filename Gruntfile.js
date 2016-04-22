// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        less: {
            build: {
                files: {
                    'dist/css/styles.css': 'src/css/styles.less'
                    }
                }
            },
            watch: {
                css: {
                    files: '**/*.less', // which files to watch
                    tasks: ['less'],
                    options: {
                        livereload: true,
                    },
                },
            },
    });
        
       
    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    

    // Задача по умолчанию
    grunt.registerTask('default', ['less', 'watch']);
};