import React, { useEffect, useState } from 'react';
import './About.css'
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom'

const sections = [
  { id: 'Lorem ipsum', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus sit amet odio semper, porttitor elementum metus ultrices. Fusce id dolor id sem iaculis faucibus. Morbi mollis ex nunc, eget finibus est feugiat venenatis. Vivamus dapibus eros ac nulla vehicula, et euismod diam posuere. Nulla neque lectus, elementum vitae turpis convallis, maximus eleifend velit. Ut dignissim imperdiet accumsan. Nam sapien enim, pellentesque scelerisque vestibulum in, dapibus non mi. Suspendisse ut efficitur sem. Maecenas consequat mollis iaculis. Pellentesque convallis enim at magna laoreet hendrerit. Nunc aliquet sem et nisl pulvinar, quis posuere diam ullamcorper. Aliquam eget magna eget massa pulvinar tempor vitae in purus. Etiam bibendum neque neque, et tincidunt leo rhoncus quis. Donec egestas leo ut nibh rhoncus, in eleifend magna semper. Morbi viverra suscipit massa ut scelerisque.' },
  { id: 'Duis rutrum', title: 'Duis rutrum ut quam sed tempus. Quisque bibendum suscipit lacus, a volutpat sapien sagittis quis. Nulla cursus quam risus, eget luctus risus aliquet et. Praesent pellentesque auctor dolor, at commodo diam ultricies quis. Ut eget ultricies urna. Sed congue venenatis consectetur. Fusce finibus cursus arcu ut semper.' },
  { id: 'Nunc id porta dui', title: 'Nunc id porta dui. Integer aliquet venenatis mauris nec feugiat. Pellentesque dui tortor, dictum feugiat laoreet nec, tincidunt vel lacus. Ut ac dignissim elit, id viverra nibh. Nulla sagittis mollis velit, et blandit sapien pulvinar non. Aliquam fermentum odio porttitor convallis cursus. Vivamus nulla metus, mattis at mollis et, pretium ut libero. Pellentesque tristique faucibus nunc, vitae scelerisque enim ullamcorper id. Integer mattis pharetra lorem id suscipit. Vivamus sit amet ante non elit tincidunt euismod. Phasellus consequat arcu et sollicitudin lobortis. In blandit consequat nibh.' },
  { id: 'Phasellus id odio justo', title: 'Nunc id porta dui. Integer aliquet venenatis mauris nec feugiat. Pellentesque dui tortor, dictum feugiat laoreet nec, tincidunt vel lacus. Ut ac dignissim elit, id viverra nibh. Nulla sagittis mollis velit, et blandit sapien pulvinar non. Aliquam fermentum odio porttitor convallis cursus. Vivamus nulla metus, mattis at mollis et, pretium ut libero. Pellentesque tristique faucibus nunc, vitae scelerisque enim ullamcorper id. Integer mattis pharetra lorem id suscipit. Vivamus sit amet ante non elit tincidunt euismod. Phasellus consequat arcu et sollicitudin lobortis. In blandit consequat nibh.' },
  { id: 'Vestibulum ante ipsum', title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ut magna aliquet, tincidunt nulla nec, ultrices elit. Maecenas iaculis non mauris sit amet dictum. Fusce consectetur sapien sagittis auctor commodo. Fusce feugiat varius lectus vitae facilisis. Suspendisse sit amet libero auctor, iaculis diam sit amet, rutrum dolor. Suspendisse sapien tellus, efficitur eget convallis sit amet, placerat consequat nulla. Maecenas elementum sem purus. Proin auctor felis vitae mi tincidunt tristique. Vestibulum a lobortis lacus, et faucibus ligula. In in justo ultrices, laoreet felis in, fringilla ligula. Sed eu condimentum erat. Sed eget hendrerit quam, faucibus volutpat nulla. Fusce convallis metus bibendum, porta metus ac, pulvinar leo. Duis nibh nunc, porta in dui ac, accumsan imperdiet felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
  { id: 'Sed facilisis', title: 'Sed facilisis eleifend ipsum eget vestibulum. Mauris tempor egestas dolor, non tempor enim tristique vitae. Maecenas eget consectetur turpis. Phasellus ante mauris, elementum a arcu ut, dignissim malesuada metus. Cras tristique justo ac est fringilla sodales. Aenean mattis molestie felis bibendum auctor. Nam vehicula sit amet orci sed ultrices. Nunc gravida luctus est, vitae ultrices nibh aliquam non. Vestibulum cursus nulla lectus, ac lacinia magna vulputate quis.' },
  { id: 'Pellentesque', title: 'Pellentesque volutpat malesuada turpis id facilisis. Fusce dignissim molestie elit ut elementum. Fusce tristique, nisl sodales vehicula gravida, ligula enim condimentum purus, eu mattis elit turpis at orci. Nullam justo ante, luctus quis sollicitudin eget, elementum et elit. Etiam maximus turpis et rhoncus lobortis. Sed laoreet erat mauris, et consequat lorem egestas ut. Phasellus faucibus molestie ex vitae tempor.' },
  { id: 'Cras at gravida ante', title: 'Cras at gravida ante. In non ipsum cursus, tincidunt magna at, egestas ante. Sed rutrum aliquet leo, sed dictum dolor hendrerit nec. Duis sollicitudin scelerisque nunc, in aliquet est semper et. Pellentesque maximus dui nec enim aliquet dignissim. Proin eget est ipsum. Praesent convallis risus nisi, in viverra odio rutrum nec. Donec eget malesuada mauris. Proin commodo laoreet magna, quis vestibulum risus ornare nec. Donec at felis odio. Vivamus facilisis arcu vitae mauris molestie, commodo dictum sapien consequat. Quisque placerat consequat sagittis. Fusce scelerisque odio aliquet augue tristique consectetur. Nullam fringilla ipsum sapien, ut mollis turpis cursus in. Sed in lectus elementum, venenatis ante a, vestibulum arcu.' },
  { id: 'Donec odio mi', title: 'Donec odio mi, euismod et semper a, commodo in diam. Duis justo libero, imperdiet et ultricies vitae, cursus quis nisi. Suspendisse lobortis urna vel quam scelerisque cursus. In blandit purus id magna sagittis, id pellentesque est posuere. Fusce varius felis id justo aliquet vulputate. Cras aliquam, nisi at vestibulum finibus, nulla lacus sagittis velit, vestibulum vestibulum tortor justo a mi. Vivamus eros quam, iaculis quis lobortis ut, sagittis nec lectus. Nullam tortor eros, placerat eu ante rhoncus, efficitur consectetur dui. Praesent posuere imperdiet convallis. Ut aliquet ex id odio gravida, vitae placerat arcu rhoncus. Sed lobortis eget lacus ac pharetra. Ut a felis nunc. Nunc lobortis lobortis vehicula. Fusce sodales felis vitae justo dignissim suscipit. Vestibulum porttitor magna a faucibus commodo. Quisque finibus neque non libero aliquet, eu fringilla velit condimentum. Maecenas egestas tellus a tincidunt auctor. Integer aliquet turpis a accumsan maximus. Sed interdum, tortor ut lobortis fringilla, libero tellus lacinia quam, non elementum quam mauris id metus. Proin eget urna nulla.' },
  { id: 'Sed vitae odio facilisis', title: 'Sed vitae odio facilisis, laoreet leo in, mollis augue. Curabitur aliquam velit vel sapien auctor dapibus. Vestibulum aliquet molestie velit, nec lobortis nunc. Ut aliquet ex id odio gravida, vitae placerat arcu rhoncus. Sed lobortis eget lacus ac pharetra. Ut a felis nunc. Nunc lobortis lobortis vehicula. Fusce sodales felis vitae justo dignissim suscipit. Vestibulum porttitor magna a faucibus commodo. Quisque finibus neque non libero aliquet, eu fringilla velit condimentum. Maecenas egestas tellus a tincidunt auctor. Integer aliquet turpis a accumsan maximus. Sed interdum, tortor ut lobortis fringilla, libero tellus lacinia quam, non elementum quam mauris id metus. Proin eget urna nulla. Duis at blandit est. Sed interdum, lectus eu molestie cursus, metus dui dignissim ante, vitae sagittis arcu enim a ipsum.' },
];

const About = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const Handlescroll = () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        const rect = sectionElement.getBoundingClientRect();
        const offset = window.innerHeight * 0.5;
        if (rect.top >= 0 && rect.top <= offset) {
          setActiveSection(section.id);
        }
      })
    }

    window.addEventListener('scroll', Handlescroll)
    return () => {
      window.removeEventListener('scroll', Handlescroll)
    }

  }, [])

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[])

  return (
    <div className="about">
      <div className={` ${sticky ? 'dark-nav nav' : 'nav-about'}`}>
        <div className="nav-logo">Shopee</div>
        <ul className='nav-menu'>
          <li><Link style={{ textDecoration: 'none' }} to={'/'} className={` ${sticky ? 'link' : 'link-about'}`}>Home</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to={'/products'} className={` ${sticky ? 'link' : 'link-about'}`}>Products</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to={'/about'} className={` ${sticky ? 'link' : 'link-about'}`}>About</Link></li>
          <li className={`${sticky? 'nav-contact': 'nav-contact-about'}`}><Link style={{ textDecoration: 'none' }} to={'/contact'} className='link-contact'>Contact</Link></li>
        </ul>
      </div>
      
      <div className="about-me-container">
        <div className="container">
          <div className="side-menu">
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={activeSection === section.id ? 'active' : ''}
                  >
                    {section.id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="content">
            <h1>About Us</h1>
            {sections.map((section) => (
              <div id={section.id} key={section.id}>
                <h2>{section.id}</h2>
                <p>{section.title}</p>
                <br />
                <p>{section.title}</p>
                <br />
                <p>{section.title}</p>
                <br />
                <p>{section.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
