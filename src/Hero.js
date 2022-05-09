import React from 'react'
import IdleTimerContainer from './IdleTimerContainer';

const Hero = (props) => {

    const {handleLogout} = props;
  return (
    <section className="hero">
        <nav>
            <h2>Ifeanyi Osi-Okeke</h2>
            
            <button onClick={handleLogout}>Logout</button>

           
            
        </nav>
         <div className='paragraph'>
                <p> Hello 😊, I am a Software developer and designer, interested in building products and learning new languages</p>
            </div>
        <IdleTimerContainer handleLogout={handleLogout}/>
    </section>
    
  )
}

export default Hero