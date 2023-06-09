import { Dispatch, SetStateAction } from 'react';

export type initialTypeLoader = {
  isLoadingData: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsType = {
  posts: Post[],
};

export type ActionType = {
  type: string;
  payload: Post[];
};

export type DataType = Post[];

export type ActionLoader = {
  type: string;
  payload: boolean;
};

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentsType = {
  comments: Comment[],
  [Symbol.iterator]: () => Iterator<Comment>;
}
export type initialCommentsType = {
  comments: {
    [key: string]: Comment[];
  };
};

export type ActionCommentsById = {
  type: string;
  payload: {
    payload: number;
    comments: CommentsType;
  };
};

export type ActionSagaCommentsById = {
  type: string;
  payload: number;
};

export type FormSearchProps = {
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export type FormCheckFilterProps = {
  isSortedActive: boolean;
  setIsSortedActive: (isActive: boolean) => void;
}
