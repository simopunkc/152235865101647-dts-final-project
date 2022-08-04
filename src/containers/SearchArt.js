import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import { fetchSearchCard } from '../apis/yugioh';
import { Box } from '@mui/system';

const SearchArt = () => {
    let params = useParams();
    const [searchCard, setSearchCard] = useState([]);

    useEffect(() => {
        const fetchArt = async () => {
            try {
                const fetchedData = await fetchSearchCard(params?.query);
                if (fetchedData.status) {
                    setSearchCard(fetchedData.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchArt();
    }, [params?.query]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    searchCard.map((art) => (
                        <ArtCard key={art.id} art={art}></ArtCard>
                    ))
                }
            </Box>
        </Box>
    );
}

export default SearchArt;
