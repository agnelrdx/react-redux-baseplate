import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './styles.module.css';

const NotFound = () => {
	return (
		<Box className={styles['not-found']}>
			<Typography variant="h1" component="h1" className={styles['home-title']} gutterBottom>
				404
			</Typography>
		</Box>
	);
};

export default NotFound;
