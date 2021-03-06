import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    sendShelfChange(book, shelf) {
        this.props.sendShelfChange(book, shelf)
    }

    render() {
        if (this.props.books.length === 0) {
            return null;
        }

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books.length > 0 && this.props.books.map((item) => (
                            <Book key={item.id} book={item} sendShelfChange={(book, shelf) => {this.sendShelfChange(book, shelf)} } />
                        ))
                    }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf