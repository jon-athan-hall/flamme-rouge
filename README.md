# Flamme Rouge

Tactical bicycle racing board game for the web, built with React.

/appConstants
application-wide constants, API keys, etc.

/components
components that are presentational, rendering info, without much logic.

/containers
components usually connected to the Redux store.

/higherOrderComponents
components that are functions with reusable logic or wrapper components, like a lazy loader for example.

/layouts
components that are presentational, but involve the look of an entire page.

/screens
components that are containers with presentational and subcontainers

/models
classes for each API object.

/modules
utility or helper code.

/store
Redux code. Subdirectories for each model: actions, reducers, selectors, constants.

/root
Holds bigger files like index.js, index.css, registerServiceWorker.js, Routes.js
