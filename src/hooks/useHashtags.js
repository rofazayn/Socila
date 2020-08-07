import { useContext, useEffect } from 'react';
import { HashtagsContext } from '../context/hashtags-context';
import { hashtagsTypes } from '../constants';
import fb from '../firebase';

export const useFetchTrending = () => {
  const { hashtagsState, hashtagsDispatch } = useContext(HashtagsContext);

  useEffect(() => {
    // Create a function that fetches hashtags
    const hashtagsRef = fb.firestore().collection('hashtags');

    const fetchHashtags = async () => {
      try {
        await hashtagsRef
          .orderBy('points', 'desc')
          .limit(5)
          .get()
          .then((data) => {
            let fetchedHashtags = [];
            data.forEach((doc) => {
              fetchedHashtags.push({ hashtagId: doc.id, ...doc.data() });
              return hashtagsDispatch({
                type: hashtagsTypes.SET_TRENDING,
                payload: fetchedHashtags,
              });
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
