import { useContext, useEffect } from 'react';
import { HashtagsContext } from '../context/hashtags-context';
import { hashtagsTypes, postsTypes } from '../constants';
import fb from '../firebase';
import { sha256 } from '../helpers/crypto';
import { PostsContext } from '../context/posts-context';

export const useFetchTrending = () => {
  const { hashtagsState, hashtagsDispatch } = useContext(HashtagsContext);

  useEffect(() => {
    // Create a function that fetches hashtags
    const hashtagsRef = fb.firestore().collection('hashtags');

    const fetchHashtags = async () => {
      try {
        let fetchedHashtags = [];

        await hashtagsRef
          .orderBy('points', 'desc')
          .limit(5)
          .get()
          .then((data) => {
            data.forEach((doc) => {
              fetchedHashtags.push({ hashtagId: doc.id, ...doc.data() });
            });
            return hashtagsDispatch({
              type: hashtagsTypes.SET_TRENDING,
              payload: fetchedHashtags,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchHashtags();

    return () => {
      hashtagsDispatch({
        type: hashtagsTypes.CLEAR_TRENDING,
      });
    };
  }, [hashtagsDispatch]);

  return {
    hashtags: hashtagsState.hashtags,
  };
};

export const useFetchHashtagPosts = (hashtag) => {
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    const fetchHashtagPosts = async () => {
      try {
        let hashedHashtag = await sha256(`#${hashtag}`);
        let hashtagRef = fb
          .firestore()
          .collection('hashtags')
          .doc(hashedHashtag);
        let postsRef = fb.firestore().collection('posts');

        // First fetch posts ids
        const postsIds = await hashtagRef
          .collection('posts')
          .get()
          .then((data) => {
            let fetchedPostsIds = [];
            data.forEach((doc) => {
              fetchedPostsIds.push(doc.data().id);
            });
            return fetchedPostsIds;
          });

        // Create a function that fetches a post
        const fetchPost = async (postId) => {
          const fetchedPost = await postsRef
            .doc(postId)
            .get()
            .then((doc) => doc.data());

          return fetchedPost;
        };

        // Create a function that fetches all posts related to that hashtag
        const fetchPosts = async (ids) => {
          const fetchedPosts = [];
          ids.forEach(async (id) => {
            const fetchedPost = await fetchPost(id);
            fetchedPosts.push(fetchedPost);
            postsDispatch({
              type: postsTypes.SET_POSTS,
              payload: fetchedPosts,
            });
          });

          return fetchedPosts;
        };

        const results = await fetchPosts(postsIds);

        console.log(results);

        return results;
      } catch (error) {
        console.error(error);
      }
    };

    fetchHashtagPosts();

    return () => {
      postsDispatch({
        type: postsTypes.CLEAR_POSTS,
      });
    };
  }, [hashtag, postsDispatch]);

  return {
    posts: postsState.posts,
  };
};
