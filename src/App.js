import React from 'react'
import './App.css';
import CryptoJS from 'crypto-js'
import { keccak512 } from 'js-sha3';
// import NodeRSA from 'node-rsa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Cryptology
        </p>
        <HashForm/>
      </header>
    </div>
  );
}

class HashForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 'Please write a message to crypt.',
      method: 'MD5',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    switch(this.state.method){
      case 'MD5':
        alert('result: ' + CryptoJS.MD5(this.state.entry));
        break
      case 'SHA256':
        alert('result: ' + CryptoJS.SHA256(this.state.entry));
        break
      case 'Keccak-512':
        alert('result: ' + keccak512(this.state.entry));
        break
      case 'RipeMD160':
        alert('result: ' + CryptoJS.RIPEMD160(this.state.entry));
        break
      default: break
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Choose you hashing method:
        <select name='method' value={this.state.method} onChange={this.handleChange}>
          <option value="MD5">MD5</option>
          <option value="SHA256">SHA256</option>
          <option value="Keccak-512">Keccak-512</option>
          <option value="RipeMD160">RipeMD160</option>
        </select>
      </label>
        <label>
          Entry:
          <textarea name='entry' value={this.state.entry} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Hash!" />
      </form>
    );
  }
}

class CryptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 'Please write a message to crypt.',
      method: 'AES',
      key: 'Please write a key.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    switch(this.state.method){
      case 'AES':
        alert('result: ' + CryptoJS.AES(this.state.entry, this.state.key));
        break
      // case 'RSA':
      //   const key = new NodeRSA({b: 512});
 
      //   const text = 'Hello RSA!';
      //   const encrypted = key.encrypt(text, 'base64');
      //   console.log('encrypted: ', encrypted);
      //   const decrypted = key.decrypt(encrypted, 'utf8');
      //   console.log('decrypted: ', decrypted);
      //   break
      default: break
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Choose you hashing method:
        <select name='method' value={this.state.method} onChange={this.handleChange}>
          <option value="AES">AES</option>
          {/* <option value="RSA">RSA</option> */}
        </select>
      </label>
        <label>
          Entry:
          <textarea name='entry' value={this.state.entry} onChange={this.handleChange} />
        </label>
        <label>
          Key:
          <input name='key' value={this.state.key} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Crypt!" />
      </form>
    );
  }
}

export default App;
