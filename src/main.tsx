import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter } from 'react-router-dom';

export const globalToken = { accessToken: '' };

const httpLink = new HttpLink({
  uri: import.meta.env.PROD ? 'https://noty-be.onrender.com/graphql' : 'http://localhost:8000/graphql',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.PROD ? 'wss://noty-be.onrender.com/graphql' : 'ws://localhost:8000/graphql',
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const authorizationLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  console.log("TOKEN", token)
  return {
    headers: {
      // authorization: globalToken.accessToken ? `Bearer ${globalToken.accessToken}` : '',
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authorizationLink.concat(splitLink),
  // link: splitLink,
  cache: new InMemoryCache(),
  // assumeImmutableResults: true,
  connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
