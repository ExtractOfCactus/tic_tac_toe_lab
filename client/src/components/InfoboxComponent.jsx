import React from 'react';

class InfoboxComponent extends React.Component {

  render() {

    let info = (<div id="info">
        <p>{this.props.player}, it's your turn</p>
      {/*<img src={require("../../build/images/X/profX.jpg")} />*/}
      </div>);

    if(this.props.gameOver) {
       info = (<div id="info">
          <p>{this.props.winner}, A winner is you</p>
        </div>);
    }

    return (
      <div>
      {info}
      </div>
    )
  }

}

export default InfoboxComponent;