import Header from '../Header';

const About = () => {
  const aboutStyle = {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '2rem',
    padding: '10px'
  }
  const h1Style = {
    marginLeft: '20px'
  }
    return (
      <>
        <Header></Header>
        <div style={aboutStyle} className="container mx-75 mt-5"><h1 style={h1Style} >About Page</h1></div>
      </>
    );
  }
  
  export default About;