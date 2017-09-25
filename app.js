requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        templates: '../src/templates'
    }
});
requirejs(['app/index','templates/appTemplates']);