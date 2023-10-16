import * as VIDEOS_APP from '~/utils/videoApp';

export const video = async (q, type = 'less') => {
    try {
        const res = await VIDEOS_APP.get('vids', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
