/*
const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World from React'
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
*/

const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'Life is Beautiful'),
    React.createElement('h2', { id: 'heading' }, 'Enjoy Coding'),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'Keep Learning'),
    React.createElement('h2', { id: 'heading' }, 'Keep Coding'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

setTimeout(() => {
  root.render(heading);
}, 3000);
setTimeout();
