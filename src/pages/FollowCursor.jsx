import { useEffect, useState } from "react";
import styles from '@/styles/FollowCursor/FollowCursor.module.scss';
import Button from '@mui/material/Button';
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function FollowCursor(){

    const [enabled, setEnabled] = useState(false);
    const [coordinates, setCoordinates] = useState({x: 0, y: 0});

    useEffect(() => {

        function handleMove(event){
            const {clientX, clientY} = event;
            setCoordinates({x: clientX, y: clientY})
        }

        if(enabled){
            window.addEventListener('pointermove', handleMove);
        }

        // Solo se ejecuta cuando el componente se desmonta o 
        // Antes de ejecutar de nuevo el UseEffect, cuando cambian las dependencias
        // Esto se llama cleanup method
        return () => {
            window.removeEventListener('pointermove', handleMove);
        }


    }, [enabled]);

    // [] -> Solo se ejecuta una vez cuando se monta el componente
    // [enabled] -> Se ejecuta cuando cambia enabled
    // undefined -> Se ejecuta cada vez que se renderiza el componente

    // useEffect(() => {
    //     document.body.classList.toggle(styles['no-cursor'], enabled);

    //     return () => {
    //         document.body.classList.remove(styles['no-cursor']);
    //     }
    // }, [enabled]);

    function handleClick(){
        setEnabled(!enabled);
    }

    return(
        <>
            <div className={styles.ball} style={{transform: `translate(${coordinates.x}px, ${coordinates.y}px)`}}></div>
            <Button onClick={handleClick} variant="outlined">{enabled? 'Desactivar' : 'Activar'} Seguir mi cursor</Button>
            <Box sx={{ 
                    width: '80%',
                    mt: 2,
                    mx: 'auto'
                }}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography variant="h4" component="div" sx={{textAlign: 'center'}}>
                            Información sobre tu cursor
                        </Typography>
                        <Typography variant="p">
                            <ul
                                style={{
                                    marginLeft: '15px'
                                }}
                            >
                                <li>
                                    <Typography 
                                        variant="subtitle1" 
                                        component="strong"
                                    >Posición X:</Typography> {coordinates.x}
                                </li>
                                <li>
                                    <Typography 
                                        variant="subtitle1" 
                                        component="strong"
                                    >Posición Y:</Typography> {coordinates.y}
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );

}