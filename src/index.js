import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Amy" 
                timeAgo="An hour ago" 
                avatar={faker.image.avatar()} 
                content="Nice I Really like"
            />
            <CommentDetail 
                author="Angelo" 
                timeAgo="Yesterday at 10:30 PM" 
                avatar={faker.image.avatar()} 
                content="best one"
            />
            <CommentDetail 
                author="Yarohkado" 
                timeAgo="Today at 09:00 AM" 
                avatar={faker.image.avatar()} 
                content="So cool"
            />
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)