import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/orawee.jpeg" alt="Orawee" width={300} height={300} />
            </div>
            <h1>Hi, I'm Orawee</h1>
            <p>I blog about web development</p>
        </section>
    )           
}

export default Hero;