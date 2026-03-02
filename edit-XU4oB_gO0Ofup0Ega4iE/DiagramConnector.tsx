import { styled } from '@mui/material/styles'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'

const DiagramConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    // Adjust margin to align the connector with the DiagramStepIcon, which is 100px wide + some padding/margin
    // The DiagramStepIcon is rendered within a Box that has px:1, making it effectively 120px wide (100px icon + 2*10px padding of parent box)
    // The Stepper itself has some internal padding. Let's aim to align it roughly with the center of the icon.
    // Given the icon is 100px wide, and the overall Step has a flex layout,
    // we need to push the connector right. The DiagramStepIcon itself has px:1 (16px total horizontal padding)
    // and is 100px wide. So its left edge is at 8px (half of 16px).
    // The connector's line is 3px wide. To center it, it should start at (100 / 2) - (3 / 2) = 50 - 1.5 = 48.5px
    // However, the entire Step component has padding. The DiagramStepIcon is wrapped in a Box with flexShrink:0
    // The DiagramStepIcon itself is wrapped in a Box with px:1 (so 8px padding on each side).
    // The DiagramStepIconRoot is 100px wide.
    // So the total width of the icon container is 100 + 2*8 = 116px.
    // To center the connector (3px wide) with this 116px, the connector's left edge should be at 116/2 - 3/2 = 58 - 1.5 = 56.5px from the start of the <Step> element.
    // The Stepper usually adds some padding too. Let's try a fixed value first and adjust.
    marginLeft: 55, // Adjusted for visual alignment with the octagonal icon
    padding: '8px 0', // Vertical padding
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light, // Lighter red for active/completed connector
    },
    '& .MuiStepConnector-line::after': {
      borderBottom: `3px solid ${theme.palette.primary.light}`, // Changed for downward arrow
      borderRight: `3px solid ${theme.palette.primary.light}`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light, // Lighter red for active/completed connector
    },
    '& .MuiStepConnector-line::after': {
      borderBottom: `3px solid ${theme.palette.primary.light}`, // Changed for downward arrow
      borderRight: `3px solid ${theme.palette.primary.light}`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#600000', // Darker red for inactive connector
    borderLeftWidth: 3, // Changed for vertical line
    borderRadius: 1,
    transition: theme.transitions.create('border-color', {
      duration: theme.transitions.duration.enteringScreen,
    }),
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -8, // Position the arrow head at the bottom of the line
      left: '50%', // Center horizontally with the line
      transform: 'translateX(-50%) rotate(45deg)', // Rotate for downward pointing arrow
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      borderBottom: '3px solid #600000', // Default color for arrow
      borderRight: '3px solid #600000',
      pointerEvents: 'none', // Allow clicks to pass through
      transition: theme.transitions.create(['border-color'], {
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
}))

export default DiagramConnector