import { Component } from 'react';
import BasicInfo from './components/BasicInfo';

let friends = [
  {
    name: 'Diego',
    phone: '444444444444',
    age: 21,
  },
  {
    name: 'Big Janette',
    phone: '704-555-5555',
    age: 24,
  },
  {
    name: 'Thierno',
    phone: '4444',
    age: 25,
  },
  {
    name: 'Oscar',
    phone: '3510938510238509285',
    age: 22,
  },
  {
    name: 'Debora',
    phone: '029835-0948-02450943850921384092834901',
    age: 25,
  },
];

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />;
  });
}

export default class App extends Component {
  // easy
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }
  // very easy/ medium
  render() {
    return iteratePeople(friends);
  }
}
