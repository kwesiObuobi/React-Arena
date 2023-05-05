import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookList from './components/BookList';
import CategoriesPage from './components/CategoriesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>This is error element</div>,
    children: [
      {
        index: true,
        element: <BookList />,
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
