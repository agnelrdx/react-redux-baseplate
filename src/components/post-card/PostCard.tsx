import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Post } from 'types/index';

interface PostCardProps {
	post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
	return (
		<Card sx={{ width: 300, height: 250, m: 1 }}>
			<CardContent>
				<Typography color="text.secondary" gutterBottom>
					{post.title}
				</Typography>
				<Typography variant="body2">{post.body}</Typography>
			</CardContent>
		</Card>
	);
};

export default PostCard;
