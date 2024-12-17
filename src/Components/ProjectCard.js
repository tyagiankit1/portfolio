import React, { useRef, useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



function projectCard(projects) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedProjectResponsibilities, setselectedProjectResponsibilities] = React.useState(<></>);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (project) => {
	setSelectedProject(project)
	
	setselectedProjectResponsibilities(project.responsibilities.map((responsibility) =>
	<li><DialogContentText variant="h6">
		  >> {responsibility}
          </DialogContentText></li>
	
	) );
	
	
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  console.log("projects data: ", projects)
  let projectList = <></>;
  if(projects.projects != undefined){
    projectList = projects.projects.map((project) =>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h5"
          color="text.secondary"
        >
          {project.duration}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} onClick={() => handleClickOpen(project)}>
          <Typography variant="h4" component="span">
            {project.title}
          </Typography>
  <Typography>{project.role}</Typography>
        </TimelineContent>
      </TimelineItem>
	  
    );
  }
  
  

  return (
    <>
	<Timeline position={matches?'alternate':'right'}>
      {projectList}
    </Timeline>
	{selectedProject !== null ? 
	
	<Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} variant="h3" id="customized-dialog-title">
          {selectedProject.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
	
        <DialogContent dividers>
		<DialogContentText  variant="h4"> Overview </DialogContentText>
          <DialogContentText variant="h6">
		  {selectedProject.description}
          </DialogContentText>
        </DialogContent>
		
		<DialogContent dividers>
		<DialogContentText  variant="h4"> Responsibilities </DialogContentText>
		<ul>{selectedProjectResponsibilities}</ul>
        </DialogContent>
        
      </Dialog>
	: <>< />}
    </>
  );
}
  export default projectCard;
