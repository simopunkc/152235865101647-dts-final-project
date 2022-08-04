import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailArtCard from '../components/DetailArtCard';
import { fetchDetailCard } from '../apis/yugioh';
import { Box } from '@mui/system';

const DetailArt = () => {
    let params = useParams();
    const [singleArt, setSingleArt] = useState([]);

    useEffect(() => {
        const fetchArt = async () => {
            try {
                const fetchedData = await fetchDetailCard(params?.id_art);
                if (fetchedData.status) {
                    setSingleArt(fetchedData.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchArt();
    }, [params?.id_art]);

    return (
        <Box sx={{
            display: 'block',
            mt: 5,
        }}>
            {
                singleArt.map(art => (
                    <DetailArtCard key={art.id} art={art}></DetailArtCard>
                ))
            }
        </Box>
    );
}

export default DetailArt;
