import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={handleBackClick} style={{ position: 'absolute', top: 20, left: 20, color: '#ffffff' }}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
