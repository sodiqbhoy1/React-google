import logo from './images/google.png'
import mic from './images/mic.svg'
import camera from './images/camera.svg'
import search from './images/search.svg'
import grid from './images/grid.svg'
import me from './images/me.jpg'
import bell from './images/bell.png'
function App() {

  return (
    <>
    <div>

<div className="body">


{/* mobile view nav */}
<div className="mobilenav">

  <ul>
    <li><a href="#">ALL</a></li>
    <li><a href="#">IMAGES</a></li>
  </ul>

{/*  */}

<div className='navIcons'>
<img src={bell} alt="" />
<img src={grid} alt="" />
<img src={me} alt="" />
</div>

</div>

{/* large screen nav */}
<nav >
  <ul>
    <li><a href="#">Gmail</a></li>
    <li><a href="#">Images</a></li>
  </ul>

  
  <div className="navicons">

<img className='grid navicons' src={grid} alt="Grid" /> 
 <img className='me navicons' src={me} alt="DP" />       
</div>
</nav>

<div className='container'>



<img className='logo' src={logo} alt="" />

<div className='inputDiv'>
<input type="text" />
<img className='icon mic' src={mic} alt="" />
<img className='icon camera' src={camera} alt="" />
<img className='icon search' src={search} alt="" />

    </div>

<div className='buttonDiv'>
  <button>Google Search</button>
  <button>I'm Feeling Lucky</button>
</div>


<div className="language">
  <p> Google offered in: <a href="#">Hausa</a> <a href="#">Igbo</a> <a href="#">Èdè Yorùbá </a>  <a href="#">Nigeria Pidgin</a> </p>
</div>
      
      
      </div>    


</div>

{/*  */}


<footer> 
  
  <p>Nigeria</p>
  
   <hr />

<div className="footer">

<ul>
  <li><a href="#">About</a></li>
  <li><a href="#">Advertising</a></li>
  <li><a href="#">Business</a></li>
  <li><a href="#">HowSearch works</a></li>
</ul>
{/*  */}



<ul>
  <li><a href="#">Our third decade of climate action: join us</a></li>
</ul>

{/*  */}


<ul>
  <li><a href="#">Privacy</a></li>
  <li><a href="#">Terms</a></li>
  <li><a href="#">Settings</a></li>
</ul>



</div>

   </footer>



</div>



    </>
  )
}

export default App
