import * as React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const DiagramStepIconRoot = styled('div')<{ ownerState: { completed?: boolean; active?: boolean } }>(
  ({ theme, ownerState }) => ({
    backgroundColor: ownerState.active
      ? theme.palette.primary.light // Lighter red for active step
      : ownerState.completed
        ? theme.palette.primary.main // Darker red for completed step
        : '#8B0000', // Even darker red for incomplete/upcoming step
    zIndex: 1,
    color: '#fff',
    width: 100,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
    boxShadow: ownerState.active
      ? `0 0 0 4px ${theme.palette.primary.light}` // Highlight active step with a glow
      : ownerState.completed
        ? `0 4px 10px 0 ${theme.palette.primary.dark}`
        : 'none',
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& .MuiSvgIcon-root': {
      fontSize: 40,
      marginBottom: theme.spacing(0.5),
    },
    cursor: 'pointer', // Indicate that it's clickable
    '&:hover': {
      backgroundColor: theme.palette.primary.light, // Hover effect
    },
    ...theme.applyStyles('dark', {
      backgroundColor: ownerState.active
        ? theme.palette.primary.light
        : ownerState.completed
          ? theme.palette.primary.main
          : theme.palette.grey[700],
    }),
  }),
)

interface DiagramStepIconProps {
  active?: boolean
  completed?: boolean
  icon: React.ReactNode // The actual MUI Icon component
  label: string
  description: string
  onClick: () => void // New onClick prop
}

export default function DiagramStepIcon(props: DiagramStepIconProps) {
  const { active, completed, icon, label, description, onClick } = props

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 1 }} onClick={onClick}>
      <DiagramStepIconRoot ownerState={{ active, completed }}>{icon}</DiagramStepIconRoot>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          maxWidth: 120, // Constrain width for better display below icon
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          maxWidth: 120,
        }}
      >
        {description}
      </Typography>
    </Box>
  )
}