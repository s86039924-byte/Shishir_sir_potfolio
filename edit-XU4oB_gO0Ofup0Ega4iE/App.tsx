import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Fade from '@mui/material/Fade'

import DiagramStepIcon from './DiagramStepIcon.tsx'
import DiagramConnector from './DiagramConnector.tsx'

// Core Icons
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import SchoolIcon from '@mui/icons-material/School'
import EditNoteIcon from '@mui/icons-material/EditNote'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import FavoriteIcon from '@mui/icons-material/Favorite'

const workflowSteps = [
  {
    label: 'Foundation & Environment',
    description: 'Setting the stage for success',
    icon: <TravelExploreIcon />,
    details: [
      'Competitive Environment: Highly motivating and conducive academic atmosphere with strict discipline.',
      'Small Batch Size: Homogenous small groups for focused attention and smooth progress.',
      'Well-Being Focus: Well-ventilated spaces and short breaks for refreshment between lectures.',
    ],
  },
  {
    label: 'Expert Instruction',
    description: 'Mastering concepts with the best',
    icon: <SchoolIcon />,
    details: [
      'Renowned Faculty: Highly experienced, result-oriented mentors guiding every step.',
      'Structured Lecture Flow: Students always know coverage percentage and class status.',
      'Concept Clarity: Prime attention on basic fundamentals through interactive lectures.',
      'School Synchronization: Aligned with school syllabus for faster grasp of fundamentals.',
    ],
  },
  {
    label: 'Practice & Refinement',
    description: 'Sharpening skills through rigorous practice',
    icon: <EditNoteIcon />,
    details: [
      'Comprehensive Material: Scientifically prepared high-quality study material.',
      'Graded Assignments: Assignments with varying difficulty: Ordinary, Intelligent, and I-Level.',
      'Doubt Discussion: Open discussions with concerned faculties to clear all hurdles.',
      'Problem Solving: Regular sessions dedicated to solving complex problems.',
    ],
  },
  {
    label: 'Testing & Analysis',
    description: 'Evaluation in real exam environment',
    icon: <LaptopMacIcon />,
    details: [
      'Real-Exam Simulation: State of the art computerized testing setup.',
      'Final Full Tests: Full syllabus tests in exam-like conditions.',
      'Deep Analysis: Detailed test analysis to identify and improve weaknesses.',
      'Regular Evaluation: Frequent quizzes and topic-wise tests to validate understanding.',
    ],
  },
  {
    label: 'Support & Mentorship',
    description: 'Beyond academics: Psychological and strategic support',
    icon: <FavoriteIcon />,
    details: [
      'Motivational Sessions: Talks for personality development and confidence building.',
      'Stress Counseling: Pre-exam stress management and counseling.',
      'Strategic Guidance: Time management tips and tricks for objective questions.',
      'Parent Feedback: Regular progress discussions with parents.',
    ],
  },
]

export default function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex)
  }

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a', // Dark background for the whole section
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}
      >
        Core Strengths Workflow
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'center', mb: 6, color: 'rgba(255, 255, 255, 0.7)' }}
      >
        Steps to Academic Excellence
      </Typography>

      <Stepper
        orientation="vertical"
        connector={<DiagramConnector />}
        sx={{
          width: '100%',
          maxWidth: 1200,
          px: { xs: 0, md: 4 }, // Add horizontal padding for larger screens
          alignSelf: 'flex-start', // Align stepper to the top
        }}
      >
        {workflowSteps.map((step, index) => (
          <Step key={step.label} active={index === activeStep} completed={index < activeStep}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack on xs, side-by-side on md+
                alignItems: { xs: 'center', md: 'flex-start' }, // Center icon on xs, align top on md+
                gap: { xs: 2, md: 4 }, // Gap between icon and details
                width: '100%',
              }}
            >
              <Box sx={{ flexShrink: 0, mt: { xs: 0, md: '12px' } }}> {/* Added margin-top to align icon with connector, and flexShrink */}
                <DiagramStepIcon
                  icon={step.icon}
                  label={step.label}
                  description={step.description}
                  active={index === activeStep}
                  completed={index < activeStep}
                  onClick={() => handleStepClick(index)}
                />
              </Box>

              {/* Details section, now integrated per step */}
              {index === activeStep && (
                <Fade in={true} key={activeStep} timeout={500}>
                  <Box
                    sx={{
                      flexGrow: 1, // Allow details to take remaining space
                      maxWidth: { xs: '100%', md: 800 },
                      width: '100%',
                      backgroundColor: 'background.paper',
                      borderRadius: 2,
                      p: 3,
                      boxShadow: 3,
                      mt: { xs: 0, md: '12px' }, // Align details with the icon
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
                      {workflowSteps[activeStep].label} Details:
                    </Typography>
                    <List>
                      {workflowSteps[activeStep].details.map((detail, detailIndex) => (
                        <ListItem key={detailIndex} sx={{ display: 'flex', justifyContent: 'flex-start', py: 0.5 }}>
                          <ListItemText
                            primary={detail}
                            primaryTypographyProps={{
                              sx: { color: 'rgba(255, 255, 255, 0.8)', textAlign: 'left' },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Fade>
              )}
            </Box>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}