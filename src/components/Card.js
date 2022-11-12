import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(skillType, skillTitle, skillDuration, projectsApplied, barclass) {
  return (
    <p>
    <Card sx={{ minWidth: 125 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {skillType}
        </Typography>
        <Typography variant="h5" component="div">
          {skillTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {skillDuration}, {projectsApplied}
        </Typography>
        <div className="bars">
        <ul className="skills">
        <li>
        <span className={`bar-expand ${barclass}`}>
                      </span><em>{}</em>
        </li>
        </ul>
        </div>
      </CardContent>
    </Card>
    </p>
  );
}