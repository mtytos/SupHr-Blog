import React, {Component} from "react";
import {Link} from "react-router-dom";
import Superman from '../logo/SupermanLogo.png';
import {connect} from 'react-redux';

class Home extends Component {

    render() {
        console.log(this.props);
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Superman} alt="A superman logo"/>
                        <div className="card-content">
                            <Link to={'/home/' + post.id}>
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
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps)(Home);