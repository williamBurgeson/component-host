# Component Host

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

It is designed to demonstrate the dynamic generation and hosting of components (which would also be routable) and also setting properties on the given hosted component.

It contains 4 components: Hello, Bonjour, GutenTag and Dynamic, and a service, BuonGiorno. All 4 components can be routed to, and the app component contains a list of links to allow the navigation to them.

Hello, Bonjour and GutenTag are simple components which contain a dependency on the BuonGiorno service - this service just returns a message ("Message From Service") which is displayed in the component in question.

The Dynamic component is more complex, and when it is navigated to, a list of links for the 3 other components is displayed. Selecting one causes a type reference to one of the components to be loaded into a ViewContainerRef, hence not only displaying that component but also providing a reference back to the instance of the component for the outer Dynamic component to manipulate.

Note also when a new hosted component is hosted within the Dynamic component it is necessary to clear the ViewContainerRef - not doing this will continually produce new components one after the other like a production line in a factory. This might be what is required in some situations but give we are retaining a reference to the generated component this is not desirable in our case.

To demonstrate this last point the Dynamic component also has a set of link tags which pass a message into the hosted component, which is then displayed inside that component. Note that given the hosted component is typed to the outside world as "any", it does not matter whether that property exists or not. If it doesn't exist it will just be ignored.

Note this site is just a proof of concept, contains no styling whatsoever, nor is there any thought given to layout or presentation; the default "XXX works!" message is left in to indicate which component is rendering the given section of the page.

I should also acknowledge https://juristr.com/blog/2017/07/ng2-dynamic-tab-component/, from which I was able to grab the critical component creation code from.