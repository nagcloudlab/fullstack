import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './BookList';


const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

function App() {
  return (
    <div className="container">
      <hr />
      <h1>react + graphQL</h1>
      <hr />
      <ApolloProvider client={client}>
        <BookList />
      </ApolloProvider>
    </div>
  );
}

export default App;
