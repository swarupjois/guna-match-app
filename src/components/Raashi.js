import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Nakshatra from './Nakshatra';

export default function Raashi({ data }) {
    const [raashi, setRaashi] = React.useState('');
    const [isRaashiSelected, setRaashiSelected] = React.useState(false);
    const [nakshatra, setNakshatra] = React.useState([])
    const [guna, setGuna] = React.useState();
    const [selectedNakshatra, setSelectedNakshatra] = React.useState('');

    const handleRaashiChange = (event) => {
        setRaashi(event.target.value);
        let filteredNakshatra = [];
        if (event.target.value) {
            filteredNakshatra = data.raashiNakshatraMatch && data.raashiNakshatraMatch.filter((data, index) => {
                if (data.raashi === event.target.value)
                    return data.nakshatra;
            })
        }
        setNakshatra(filteredNakshatra);
        event.target.value && setRaashiSelected(true);
        setGuna(undefined);
        setSelectedNakshatra('');

    };

    return (
        <div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-helper-label">Raashi</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={raashi}
                        label="Raashi"
                        onChange={handleRaashiChange}
                        className={'menuItems'}
                    >
                        {
                            data.raashiNakshatraMatch && data.raashiNakshatraMatch.map((data, index) => {
                                return <MenuItem className={'menuItems'} value={data.raashi}>{data.raashi}</MenuItem>
                            })
                        }
                    </Select>
                    <FormHelperText>Select Bride Raashi</FormHelperText>
                </FormControl>
            </div>
            <div>
                {isRaashiSelected && <Nakshatra data={nakshatra} guna={guna} setGuna={setGuna} nakshatra={selectedNakshatra} setNakshatra={setSelectedNakshatra} />}
            </div>
        </div>
    );
}
