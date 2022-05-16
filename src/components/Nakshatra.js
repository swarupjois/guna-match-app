import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Nakshatra.css';
import { TextField } from '@material-ui/core';

export default function Nakshatra({ data, guna, setGuna }) {
    const [nakshatra, setNakshatra] = React.useState('');

    const handleNakshatraChange = (event) => {
        setNakshatra(event.target.value);
        let gunaCount = data[0].nakshatra.filter((data, index) => {
            return data.name === event.target.value
        })
        setGuna(gunaCount);
    };

    function getBorderColor(guna) {
        if (guna[0].isSquare) {
            return 'gunaResultLess';
        } else if (guna[0].isRambus) {
            return 'gunaResultMore';
        } else if (guna[0].guna < 17) {
            return 'gunaResultLess'
        } else if (guna[0].guna >= 18) {
            return 'gunaResultMore';
        } else {
            return 'gunaResult';
        }
    }

    return (
        <div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-helper-label">Nakshatra</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={nakshatra}
                        label="Nakshatra"
                        onChange={handleNakshatraChange}
                        className={'menuItems'}
                    >
                        {
                            data[0].nakshatra.map((data, index) => {
                                return <MenuItem className={'menuItems'} value={data.name}>{data.name}</MenuItem>
                            })
                        }
                    </Select>
                    <FormHelperText>Select Bride Nakshatra</FormHelperText>
                </FormControl>
            </div>
            <div>
                {guna && <div className={getBorderColor(guna)}> <div className='resultLabel'>
                    Guna match count:
                </div>
                    <div className='resultCount'>
                        <div className={guna[0].isRambus ? 'diamond-shape' : guna[0].isSquare ? 'square-shape' : 'normal'}>
                            <span className={guna[0].isRambus ? 'diamond-count' : guna[0].isSquare ? 'square-count' : guna[0].guna < 18 ? 'normal-less-count' : 'normal-more-count'}>{guna[0].guna}</span>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}
