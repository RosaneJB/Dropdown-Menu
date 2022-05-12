import React from 'react';
import './App.css';
import { Layout } from './layout';
import { MainRoutes } from './routes';

function App() {
  return (
    <>
      <Layout>
        <MainRoutes />
      </Layout>
    </>
  );
}

export default App;
