import React, {Component} from 'react';

export default class About extends Component {

setVar() {
  Session.set('Meteor.loginButtons.dropdownVisible', true);
}

render(){
  return (
    <div>
      <h1>About Us</h1>
      <p>Jean shorts tilde gastropub mumblecore kickstarter, before they sold out YOLO lomo 90's fixie mustache pinterest. Master cleanse tousled before they sold out roof party XOXO aesthetic. Before they sold out irony pug vinyl raw denim ugh. Shabby chic four loko bushwick echo park. Bespoke drinking vinegar lomo, hammock waistcoat kogi bushwick shabby chic gochujang messenger bag next level kitsch mumblecore. Stumptown hoodie skateboard, church-key VHS thundercats semiotics. Godard neutra man bun, ennui tumblr master cleanse marfa.</p>
      <button onClick={this.setVar}>Signup</button>
    </div>
  )
}

}
