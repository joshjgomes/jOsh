// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Josh J. Gomes" />

            <div className='header__content'>
                <h1>Sup, I'm jOsh.</h1>
                <p>Solidity Dev & Researcher</p>
                <a href="mailto:j-sh@gmx.com?subject=Serious%20Inquires%20Only" className='button'>Message Me</a>
            </div>
        </section>
    );
}

export default Header;