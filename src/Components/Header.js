import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { green, grey, indigo } from '@mui/material/colors';


class Header extends Component {
	

  render() {
    if (this.props.data) {
      var firstName = this.props.data.firstName
      var name = this.props.data.name
	  var profilepic = 'images/' + this.props.data.image
	  var resumedownload = this.props.data.resumedownload
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
	
	let windowWidth = window.innerWidth;
	console.log(windowWidth)

    return (
      <header id='home'>
	<nav id='nav-wrap'>
		<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
		<a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>
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
                Experience
              </a>
			</li>
			<li>
				<a className='smoothscroll' href='#workHostory'>
                Project History
              </a>
			</li>
		</ul>
	</nav>
	<div className='banner'>
		<div className='banner-text'>
			<Grid container rowSpacing={1} spacing={2}>
				<Grid item xs={windowWidth < 800 ? 12 : 7} className='heroUserData' style={{margin: 'auto', textAlign: "center"}}>
					{windowWidth < 800 ?
					<Avatar
					 className='responsive-headline'
					  alt={name}
					  src={profilepic}
					  style={{marginLeft: '25%'}}
					  sx={{ width: 200, height: 200 }}
					/> : <></>}
					<h2 className='responsive-headline' style={{color: '#fff'}}>Hi, I Am </h2>
					<h1 className='responsive-headline'>{name}</h1>
					<h5 className='responsive-headline' style={{color: '#fff'}}>with</h5>
					<Grid container spacing={2}>
						<Grid item xs={4} className='heroUserData'>
							<h2 className='responsive-headline' style={{color: '#fff', textAlign:'right' }}>9+</h2>
						</Grid>
						<Grid item xs={8} className='heroUserData'>
							<h4 className='responsive-headline' style={{color: '#fff', textAlign:'left' }}>Years of Experience in Web development</h4>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={4} className='heroUserData'>
							<Link href="https://www.linkedin.com/in/tyagi-ankit5256/" target="blank" underline="none">
								<Avatar className='responsive-headline' sx={{ bgcolor: indigo[900] }}>
								  <LinkedInIcon />
								</Avatar>
							</Link>
						</Grid>
						<Grid item xs={4} className='heroUserData'>
							<Link href="https://github.com/tyagiankit1" target="blank" underline="none">
								<Avatar className='responsive-headline' sx={{ bgcolor: grey[900] }}>
								  <GitHubIcon />
								</Avatar>
							</Link>
						</Grid>
						<Grid item xs={4} className='heroUserData'>
							<Button variant="contained" href={resumedownload} target="blank" startIcon={<FileDownloadIcon />}>
							  Resume
							</Button>
						</Grid>
					</Grid>
					
				</Grid>
				{ windowWidth > 800 ?
				<Grid item xs={5}>
					<img src={profilepic} alt={name}/>
				</Grid>
				: <></>}
			</Grid>
        </div>
	</div>
</header>
    )
  }
}

export default Header
