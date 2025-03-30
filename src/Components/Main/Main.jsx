import './Main.css';
import Img2 from '../../Images/illustration-working.svg';
import Img3 from '../../Images/icon-brand-recognition.svg';
import Img4 from '../../Images/icon-detailed-records.svg';
import Img5 from '../../Images/icon-fully-customizable.svg';
import { useState } from 'react';

const Main = () => {
    const [inputValue, setInputValue] = useState('');
    const [shortenedLink, setShortenedLink] = useState('');
    const [error, setError] = useState('');
    
    const handleShorten = async () => {
        const Link = document.querySelector('input#link');
        
        if (!inputValue) {
            Link.classList.add('red');
            setError('Please add a link');
            return;
        }

        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            const data = await response.json();

            if (data.ok) {
                setShortenedLink(data.result.full_short_link);
                setError('');
            } else {
                setError('Failed to shorten the link. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

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
                        <input 
                            type="text" 
                            placeholder="Shorten a link here..." 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            id='link'
                        />
                        <button onClick={handleShorten}>Shorten It!</button>
                        {error && <p className="error">{error}</p>}
                    </div>
                    {shortenedLink && (
                        <div className="shortened-link">
                            <p>{inputValue}</p>
                            <a href={shortenedLink} target="_blank" rel="noopener noreferrer">{shortenedLink}</a>
                            <button onClick={() => navigator.clipboard.writeText(shortenedLink)}>Copy</button>

                            <button>Copy</button>
                        </div>
                    )}
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
