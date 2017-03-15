## SETUP
- rake db:create to create database (or can use rake db:setup)
- react-router version changed => react-router@3.x
- window.store.dispatch(login(user)) doesn't work. login is undefined:
  -- add actions to entry file


- Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in.
-- need to export

- Error: You must pass a component to the function returned by connect. Instead received {}
  -- 
