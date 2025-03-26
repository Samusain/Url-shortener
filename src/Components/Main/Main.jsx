import './Main.css';
import Img2 from '../../Images/illustration-working.svg';
import Img3 from '../../Images/icon-brand-recognition.svg';
import Img4 from '../../Images/icon-detailed-records.svg';
import Img5 from '../../Images/icon-fully-customizable.svg';


const Main = () => {
    return ( 
        <div className="main">
            <main>
                <section className="intro">
                    <article className="article-one">
                        <h1>More than just shorter links</h1>
                        <p>Build your brand's recognition and get detailed insights 
                        on how your links are performing.</p>
                        <button className="register">Get Started</button>
                    </article>
                    <img src={Img2} alt="illustration-working"/>
                </section>


                <section className="statistic">
                    <div className="shorten">
                        <input type="text" placeholder="Shorten a link here..."/>
                        <button>Shorten It!</button>
                    </div>
                    <article className="stats">
                        <h2>Advanced Statistics</h2>
                        <p>Track how your links are performing across the web with our 
                        advanced statistics dashboard.</p>
                    </article>
                    <div className='blue-line'></div>
                    <div className="stat-boxes">
                        <article className="stat-one">
                            <img src={Img3} alt="Brand-Recog."/>
                            <h3>Brand Recognition</h3>
                            <p>Boost your brand recognition with each click. Generic links don't 
                            mean a thing. Branded links help instil confidence in your content.</p>
                        </article>
                        <article className="stat-two">
                            <img src={Img4} alt="Records"/>
                            <h3>Detailed Records</h3>
                            <p>Gain insights into who is clicking your links. Knowing when and where 
                            people engage with your content helps inform better decisions.</p>
                        </article>
                        <article className="stat-three">
                            <img src={Img5} alt="Customizable"/>
                            <h3>Fully Customizable</h3>
                            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </article>
                    </div>
                </section>

                <section className="boost">
                    <div className="boost-box">
                        <h4>Boost your links today</h4>
                        <button className="register">Get Started</button>
                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Main;