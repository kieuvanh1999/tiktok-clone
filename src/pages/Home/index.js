import './home.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import VidsModel from '~/layouts/components/VidsModel';

const baseURL = 'http://localhost:1337/api/vids?populate=*';

function Home() {
    const [videoResult, setVideoResult] = useState([]);

    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setVideoResult(response.data.data);
        });

        // lắng nghe sự kiện cuộn của cửa sổ
        window.addEventListener('scroll', () => {
            // chỉ gọi Ajax khi người dùng cuộn đến cuối trang
            if (shouldFetchData()) {
                setIsFetching(true);

                // gọi Ajax để lấy thêm dữ liệu
                axios.get(baseURL).then((response) => {
                    setVideoResult([...videoResult, ...response.data.data]);
                    setIsFetching(false);
                });
            }
        });

        return () => {
            // gỡ bỏ event listener khi component bị unmount
            window.removeEventListener('scroll', () => {});
        };
    }, [videoResult]);

    function shouldFetchData() {
        // kiểm tra xem có cần gọi Ajax để lấy thêm dữ liệu hay không
        return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && !isFetching;
    }

    return (
        <>
            {videoResult.map((item, key) => (
                <div key={key}>
                    <VidsModel home={Home} items={item} />
                </div>
            ))}

            {isFetching && (
                <div>
                    <p>Đang tải dữ liệu...</p>
                </div>
            )}
        </>
    );
}

export default Home;
// const [videoResult, setVideoResult] = useState([]);

//     useEffect(() => {
//         axios.get(baseURL).then((response) => {
//             setVideoResult(response.data.data);
//         });
//     }, []);

//     return (
//         <>
//             {videoResult.map((item, key) => (
//                 <div key={key}>
//                     <VidsModel home={Home} items={item} />
//                 </div>
//             ))}
//         </>
//     );
// }
