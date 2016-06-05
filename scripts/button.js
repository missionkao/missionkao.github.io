// tutorial12.js
var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      uuid: '',
      name: '',
      address: ''
    };
  },
  handleAddNew: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(result) {
        var data = result.data;
        this.setState({
          uuid: data.id,
          name: data.name,
          address: data.address
        });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: status});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  render: function() {
    return (
      <div className="commentBox">
      	<div>uuid: {this.state.uuid}</div>
      	<div>餐廳: {this.state.name}</div>
      	<div>地址: {this.state.address} </div>
        <button onClick={this.handleAddNew}>I am so hungry!</button>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="https://p55pnqjnw1.execute-api.ap-northeast-1.amazonaws.com/restaurants_api_dev/restaurants/random" />,
  document.getElementById('btn')
);
