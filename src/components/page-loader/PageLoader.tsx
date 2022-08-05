import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './styles.module.css';

const PageLoader = () => {
	return (
		<Box className={styles['page-loader']}>
			<CircularProgress />
		</Box>
	);
};

export default PageLoader;
