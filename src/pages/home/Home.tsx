import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { increment, decrement } from 'slices/counterSlice';
import { useLazyFetchPostsQuery } from 'slices/postsSlice';
import { fetchTodosThunk } from 'slices/todosSlice';
import PostCard from 'components/post-card/PostCard';
import TodoCard from 'components/todo-card/TodoCard';
import styles from './styles.module.css';
import logo from 'assets/logo.svg';

const Home = () => {
	const counter = useAppSelector(state => state.counter);
	const todos = useAppSelector(state => state.todos);
	const dispatch = useAppDispatch();
	const [trigger, result] = useLazyFetchPostsQuery();

	return (
		<Box className={styles['home-page']}>
			<Box>
				<Typography variant="h3" component="h1" className={styles['home-title']} gutterBottom>
					React Baseplate
				</Typography>

				<img src={logo} alt="react baseplate" className={styles['app-logo']} />

				<Typography align="center" sx={{ mb: 2 }} variant="body1" component="p" gutterBottom>
					Counter No. {counter.value}
				</Typography>

				<Stack spacing={2} mb={2} direction="row" justifyContent="center">
					<Button variant="outlined" onClick={() => dispatch(increment())}>
						Increment
					</Button>
					<Button variant="outlined" onClick={() => dispatch(decrement())}>
						Decrement
					</Button>
					<Button variant="outlined" onClick={() => trigger()}>
						Fetch Posts
					</Button>
					<Button variant="outlined" onClick={() => dispatch(fetchTodosThunk())}>
						Fetch Todos
					</Button>
				</Stack>

				<Box className={styles['loader-wrapper']}>{(result.isFetching || todos.isLoading) && <CircularProgress />}</Box>

				<Stack pb={6} direction="row" justifyContent="center" flexWrap="wrap">
					{result.data && result.data.map(post => <PostCard key={post.id} post={post} />)}
				</Stack>
				<Stack pb={6} direction="row" justifyContent="center" flexWrap="wrap">
					{todos.data.length > 0 && todos.data.map(todo => <TodoCard key={todo.id} todo={todo} />)}
				</Stack>
			</Box>
		</Box>
	);
};

export default Home;
