import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Slider, Checkbox, FormControlLabel, Typography } from '@mui/material';

const mokit = [
  { nimi: 'Rantatalo', hinta: 200 },
  { nimi: 'Kotkanpesä', hinta: 170 },
  { nimi: 'Merimetso', hinta: 150 },
  { nimi: 'Lokki', hinta: 100 }
];

function MokkiVaraus() {
  const [valittuMokki, setValittuMokki] = useState(mokit[0]);
  const [paivat, setPaivat] = useState(1);
  const [siivous, setSiivous] = useState(false);

  const kokonaishinta = (valittuMokki.hinta * paivat) + (siivous ? 100 : 0);

  return (
    <div style={{ padding: 20 }}>
      <FormControl fullWidth>
        <InputLabel>Mökki</InputLabel>
        <Select
          value={valittuMokki.nimi}
          label="Mökki"
          onChange={(e) => {
            const selected = mokit.find(m => m.nimi === e.target.value);
            if (selected) setValittuMokki(selected);
          }}
        >
          {mokit.map((mokki) => (
            <MenuItem key={mokki.nimi} value={mokki.nimi}>
              {mokki.nimi} ({mokki.hinta} €/yö)
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography style={{ marginTop: 20 }}>Varauksen kesto: {paivat} yötä</Typography>
      <Slider
        value={paivat}
        onChange={(e, value) => setPaivat(value as number)}
        min={1}
        max={14}
        step={1}
        marks
        valueLabelDisplay="auto"
      />

      <FormControlLabel
        control={<Checkbox checked={siivous} onChange={(e) => setSiivous(e.target.checked)} />}
        label="Lisää loppusiivous (100 €)"
      />

      <Typography variant="h6" style={{ marginTop: 20 }}>
        Kokonaishinta: {kokonaishinta} €
      </Typography>
    </div>
  );
}

export default MokkiVaraus;