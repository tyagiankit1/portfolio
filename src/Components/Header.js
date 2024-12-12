import React, { Component } from 'react'
import Grid from '@mui/material/Grid';


class Header extends Component {
  render() {
    if (this.props.data) {
      var firstName = this.props.data.firstName
      var name = this.props.data.name
	  var profilepic = 'images/' + this.props.data.image
      var occupation = this.props.data.occupation
      var description = this.props.data.description
      var city = this.props.data.address.city
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target='_blank'>
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>
		  
		  <Grid container spacing={2}>
			<Grid item xs={4}>
			 <ul id='nav' className='nav'>
            <li >
              <a className='smoothscroll' disabled>
			  {name}
              </a>
            </li>
			</ul>
			</Grid>
			<Grid item xs={3}></Grid>
			<Grid item xs={5}>
			  <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
			<li>
              <a className='smoothscroll' href='#education'>
                Education
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#experiance'>
                Experiance
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#workHostory'>
                Project History
              </a>
            </li>
          </ul>
			</Grid>
		  </Grid>

        </nav>

			<div className='banner'>
          <div className='banner-text'><Grid container spacing={2}>
			<Grid item xs={7} className='heroUserData' style={{margin: 'auto'}}>
			<h2 className='responsive-headline' style={{color: '#fff'}}>
              Hi, I'M 
            </h2>
			<h1 className='responsive-headline'>{name}</h1>
			<h5 className='responsive-headline' style={{color: '#fff'}} >with</h5>
				<Grid container spacing={2}>
			<Grid item xs={4} className='heroUserData'>
			<h2 className='responsive-headline' style={{color: '#fff', textAlign: 'right'}} >9+</h2>
			</Grid>
			<Grid item xs={8} className='heroUserData'>
			<h4 className='responsive-headline' style={{color: '#fff', textAlign: 'left'}}>Years of Experinse in Web development</h4>
			</Grid>
			</Grid>
			
			</Grid>
			<Grid item xs={5}>
			 <img
				src={profilepic}
				alt={name}
			  />
			</Grid>			
			</Grid>
            {/*<h1 className='responsive-headline'>
              I'm {name}
              <span>.</span>
            </h1>
            <h3>
              I'm a <span>{occupation}</span> from {city}. {description}.
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>*/}
          </div>
			</div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
			</p>
      </header>
    )
  }
}

export default Header
