/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp2.Application',

    name: 'MyApp2',

    requires: [
        // This will automatically load all classes in the MyApp2 namespace
        // so that application classes do not need to require each other.
        'MyApp2.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyApp2.view.main.Main'
});
