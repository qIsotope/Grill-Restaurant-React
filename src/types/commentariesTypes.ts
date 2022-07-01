
export interface IComment {
	avatar: string;
	comment: string;
	createdAt: string;
	date: string;
	email: string;
	id: string;
	item: string;
	name: string;
	params?: string;
}


export interface ICreateCommentary {
	comment: string;
	setComment: (e: string) => void;
	setComments: (value: IComment[]) => void;
	id: string | undefined;
	name: string | undefined;
	params: string | undefined;
	item: string | undefined;
}

export interface ICommentariesList {
	commentaries: IComment[] | undefined;
	setComments: (v: IComment[]) => void
	params: string | undefined;
}

export interface ICommentariesItem {
	comm: IComment
	params: string | undefined;
	setComments: (v: IComment[]) => void
}

export interface ICommentariesBlock {
	product?: {
		URL: string;
		name: string;
		cooking: string;
		ingridients: string;
	}
}

export interface IComments {
	createdAt: string;
	name: string;
	avatar: string;
	id: string;
	comment: string;
	email: string;
	date: string;
	item: string;
}