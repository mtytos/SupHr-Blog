import React, {Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import Superman from '../logo/SupermanLogo.png';

class FakeApi extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Superman} alt="A superman logo"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title indigo-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return (
            <div className="container fakeapi">
                <h4 className="center">FakeApi</h4>
                {postList}
            </div>
        )
    }

}

export default FakeApi;