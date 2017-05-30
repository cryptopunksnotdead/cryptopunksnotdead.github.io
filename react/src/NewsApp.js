import React from 'react';
import Feed from './Feed.js';


export default class NewsApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {results: []};
  }


	componentDidMount() {
    const FEED_URL = 'https://openfootball.github.io/feed.json';

    fetch( FEED_URL )
       .then( res => res.json() )
       .then( json => {
             this.setState( { feed: json } );
            });
	}


	render() {
    const { feed } = this.state;
    return(
			<div>
				<h1 style={{textAlign: "center"}}>Feeds News Reader Example</h1>
				<Feed feed={feed} />
			</div>
		);
	}

} // class NewsApp
