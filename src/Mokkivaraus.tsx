import React, { useState } from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Checkbox,
  FormControlLabel,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

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
  const [nimi, setNimi] = useState('');
  const [paivamaara, setPaivamaara] = useState('');
  const [dialogiAuki, setDialogiAuki] = useState(false);

  const kokonaishinta = (valittuMokki.hinta * paivat) + (siivous ? 100 : 0);

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
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

      <TextField
        label="Varaajan nimi"
        variant="outlined"
        fullWidth
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
        style={{ marginTop: 20 }}
      />

      <TextField
        label="Saapumispäivämäärä"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={paivamaara}
        onChange={(e) => setPaivamaara(e.target.value)}
        style={{ marginTop: 20 }}
      />

      <Typography variant="h6" style={{ marginTop: 20 }}>
        Kokonaishinta: {kokonaishinta} €
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setDialogiAuki(true)}
        style={{ marginTop: 30 }}
      >
        Varaa mökki
      </Button>

      <Dialog open={dialogiAuki} onClose={() => setDialogiAuki(false)}>
        <DialogTitle>Varausvahvistus</DialogTitle>
        <DialogContent>
          <Typography>Nimi: {nimi}</Typography>
          <Typography>Saapumispäivä: {paivamaara}</Typography>
          <Typography>Kokonaishinta: {kokonaishinta} €</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogiAuki(false)}>Sulje</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MokkiVaraus;