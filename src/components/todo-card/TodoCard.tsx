import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ToDo } from 'types/index';

interface TodoCardProps {
	todo: ToDo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
	return (
		<Card sx={{ width: 300, height: 100, m: 1 }}>
			<CardContent>
				<Typography color="text.secondary" gutterBottom>
					{todo.title}
				</Typography>
				<Typography variant="body2">Completed: {`${todo.completed}`}</Typography>
			</CardContent>
		</Card>
	);
};

export default TodoCard;
