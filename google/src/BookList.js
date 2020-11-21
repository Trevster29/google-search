import React from 'react';
import { prependOnceListener } from 'superagent';

const Booklist = () => {
    return(
        <div className="List">
            {
                prependOnceListener.books.map((book, i) => {
                    return <BookCard 
                        image={}
                        title={}
                        author={}
                        published={}
                    />
                })
            }
        </div>
    )
};

export default BookList;