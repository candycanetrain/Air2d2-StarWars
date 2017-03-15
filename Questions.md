##Questions for TA
3/13/17
1. api endpoints
2. what to call cities components
3. check component hierarchy
3/14/17
1. const _nullUser => What is the Object.freezze for?
  -to render errors if you try to change things toplevel stuff
3.15.17
1. Style questions, use {link} from react-router or buttons w/ onClick feature. Decision: use links and style with CSS
2. gitignore md files
2. modals
3. bootstraps
4. sass

##Plans:

start writing components, hard code some info, "hi, username", work backwards, redux cycle

any components that dispatches action needs a container

build out the html outline first, then refactor one at a time. make each component functional. 

ownProps has params (from routes)



#NOTES
1. npm install --save redux-thunk
2. npm install --save react-router@3.x
3. import { login, logout } from './util/session_api_util';
  const windowFunctions = { login, logout };
  Object.assign(window, windowFunctions);
  // const windowFunctions = {configureStore};
// Object.assign(window, windowFunctions);
4. router.push is a wrapper hashHistory.push (they do the same thing)
5. 


#NOTES FOR FUTURE
1. be careful when clearing errors that you don’t reset your current user to your nullUser (unless that’s what you intend to do).  That’s a classic FSP mistake - spare yourself!