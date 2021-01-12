import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const BookList = () => {
    return (
        <div>

            <Query query={gql`
                {
                    books{
                      id,  
                      name,
                      author{
                        name
                      }
                    }
                }
            `}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <p>Loading ...</p>;
                        if (error) return <p>Error :(</p>;
                        return data.books.map((book, idx) => {
                            return (
                                <div key={idx} className="card">
                                    <div className="card-body">
                                        <span>Book Name : {book.id} - {book.name}</span>
                                        <hr />
                                        <span> Author    : {book.author.name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                }
            </Query>

        </div >
    );
};

export default BookList;