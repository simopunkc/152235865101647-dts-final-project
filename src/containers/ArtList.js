import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchListCard } from '../apis/yugioh';
import ArtCard from '../components/ArtCard';

const ArtList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [paginationCard, setPaginationCard] = useState([]);
    const [paginationCardReady, setPaginationCardReady] = useState(false);

    const getCurrentPage = () => {
        const paramPage = parseInt(queryParams.get("page"))
        return paramPage > 0 ? paramPage : 1
    }

    useEffect(() => {
        const fetchIdArts = async () => {
            try {
                const fetchedData = await fetchListCard(1);
                if (fetchedData.status) {
                    setPaginationCard(fetchedData.data);
                    setPaginationCardReady(true);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchIdArts();
    }, []);

    useEffect(() => {
        if (!paginationCardReady) return;
        const changePageArts = async (page) => {
            if (page !== getCurrentPage()) {
                const fetchedData = await fetchListCard(page);
                setPaginationCard(fetchedData.data);
            }
        }
        changePageArts(queryParams.get('page'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, paginationCardReady]);

    const setPagination = (page) => {
        let targetPage = ((getCurrentPage() + page) > 0) ? getCurrentPage() + page : 1
        queryParams.set("page", targetPage);
        setQueryParams(queryParams);
    }

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
                    paginationCard.map((art) => (
                        <ArtCard key={art.id + art.type} art={art}></ArtCard>
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
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2, color: '#aaa' }}
                    onClick={() => setPagination(-1)}
                >
                    Prev Page
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2, color: '#aaa' }}
                    onClick={() => setPagination(1)}
                >
                    Next Page
                </Button>
            </Box>
        </Box>
    );
}

export default ArtList;
