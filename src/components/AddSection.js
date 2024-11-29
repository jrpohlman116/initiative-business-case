import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 'calc(100% - 48px)',
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function AddSection({addSectionsToTemplate}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (numSections) => {
    addSectionsToTemplate(numSections);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="secondary"
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        style={{width: '100%'}}
        disableElevation
        onClick={handleClick}
        startIcon={<AddIcon />}
      >
        Add section
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
      >
        <MenuItem onClick={() => handleClose(1)} disableRipple>
            <Box id="content-box"></Box>
        </MenuItem>
        <MenuItem style={{gap: '16px'}} onClick={() => handleClose(2)} disableRipple>
            <Box id="content-box"></Box>
            <Box id="content-box"></Box>
        </MenuItem>
        <MenuItem style={{gap: '16px'}} onClick={() => handleClose(3)} disableRipple>
            <Box id="content-box"></Box>
            <Box id="content-box"></Box>
            <Box id="content-box"></Box>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}