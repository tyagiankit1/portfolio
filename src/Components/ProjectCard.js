import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

function projectCard(projects) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  console.log("projects data: ", projects)
  let projectList = <></>;
  if(projects.projects != undefined){
    projectList = projects.projects.map((project) =>
      <SwiperSlide key={project.title}>
        <Card>
          <div>
            <Typography level="h2" style={{"font-size": "22px"}}>{project.title}</Typography>
            <Typography level="body-sm">For {project.client}</Typography>
            <Typography level="body-sm">{project.duration}</Typography>
          </div>
          <Divider />
          <CardContent orientation="horizontal" style={{"display": "block"}}>
            
            <Typography level='body-lg' style={{"font-size": "18px", "width": "100%"}}>{project.description}</Typography>
            <br />
            <Divider />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ width: '100%' }}
            >
              <Grid xs={6}>
                <Item><h4>Technologies Used:</h4></Item>
                { project.technologies.map((technologies) => <Item style={{"font-size": "16px", "margin": "0px", "padding": "0px"}}>{technologies}</Item>) }
              </Grid>
              <Grid xs={6}>
                <Item><h4>Responsibilities:</h4></Item>
                { project.responsibilities.map((responsibilities) => <Item style={{"font-size": "16px", "text-align": "left"}}>{responsibilities}</Item>) }
              </Grid>
            </Grid>
            
          </CardContent>
        </Card>
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {projectList}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
  export default projectCard;
