import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
       <div style={{width:"40%",height:"400px",margin:"100px auto 0px auto",padding:"20px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
         <h1>Mobile Operating System</h1>
         <ul>
           <li>Android</li>
           <li>Blackberry</li>  
           <li>iPhone</li>
           <li>Windows Phone</li>
           
         </ul>

<h1>Mobile Manufacturers</h1>
         <ul>
           <li>Samsung</li>
           <li>HTC</li>
           <li>Micromax</li>
           <li>Apple</li>
           
         </ul>
       </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
