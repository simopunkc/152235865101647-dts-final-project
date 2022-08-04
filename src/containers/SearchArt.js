import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import { fetchSearchCard } from '../apis/yugioh';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

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
            mt: 10,
            ml: '1%',
            mr: '1%'
        }}>
            <Box className='row' sx={{
                justifyContent: 'space-between',
            }}>
                {
                    searchCard.map((art) => (
                        <ArtCard key={art.id} art={art}></ArtCard>
                    ))
                }
            </Box>
            <Box sx={{
                mt: 10,
                mb: 5,
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
                alignItems: 'center',
                ml: 'auto',
                mr: 'auto',
            }}>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        color: '#ccc',
                        fontSize: '14px',
                        textAlign: 'center',
                        padding: 5,
                        display: 'block',
                        fontWeight: 500,
                    }}
                >
                    The maximum limit of search results for each query is 20
                </Typography>
            </Box>
        </Box>
    );
}

export default SearchArt;
