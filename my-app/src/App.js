// import logo from './logo.svg';
import './App.css';




let name="WORLD"

function App() {
  return (
    <>
    <div className="container">
        <div className="frontlogo">
            <div className="leftdiv">
                <h3 className="h3tag">This is my website</h3>
                <h1 className="h1tag">Welcome To my {name}</h1>
                <span className="line"></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae quisquam tota
                    reprehenderit minima, molestias,.</p>
                <div className="btndiv"><input className="btn" type="submit" value="Register NOW"/></div>
                <div className="btndiv"><input className="btn2 btn" type="submit" value="Connect"/>
                </div>
            </div>
            <div className="rightdiv">    
                <PhotoB/>
                <img src='https://images.pexels.com/photos/15007333/pexels-photo-15007333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='kfnvqk'/>
            </div>
        </div>
      </div>
    
</>)}


function PhotoB (){
  return <div>
</div>
}
export default App;
