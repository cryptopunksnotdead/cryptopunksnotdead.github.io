import React from 'react';


/*
  todo: convert to a function - why? why not?
 */

export default class Feed extends React.Component {

render() {
  return this.render_v3();
}

render_v1() {
  // show "naked" json feed
 const feed = this.props.feed;

 return(
    <div>
      {JSON.stringify(feed)}
    </div>);
 } // render_v1


render_v2() {
   // show json feed formatted w/ html template
 const feed = this.props.feed;

 if (!feed) return <div>Loading...</div>;

 return(
    <div>
      <h2>
        <a href="{feed.home_page_url}">{feed.title}</a>
      </h2>
    </div>);
} // render_v2



render_v3() {
   // show json feed formatted w/ html template
 const feed = this.props.feed;

 if (!feed) return <div>Loading...</div>;

 return(
    <div className="list">
  		{ feed.items.map( item => (
<div style={{
  padding: 10,
  margin: 10,
  background: 'white',
  boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
}}>
  <div>
    <h3>
       <a href="{item._url}">{item.title}</a>
    </h3>
    <div dangerouslySetInnerHTML={{__html: item.content_html}} />
  </div>
</div>
     )) }
    </div>);
} // render_v3

} // class Feed
