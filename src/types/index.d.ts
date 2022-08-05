export interface CounterState {
	value: number;
}

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface ToDo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
