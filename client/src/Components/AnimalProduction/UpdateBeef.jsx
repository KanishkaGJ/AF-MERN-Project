import { useState } from 'react';
import axios from 'axios';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@mui/material/Autocomplete';
import './AnimalProduction.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a8b1f", // Set your desired primary color here
    },
  },
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(10),
  },
  input: {
    margin: theme.spacing(1),
    width: "50%",
  },
  button: {
    margin: theme.spacing(3),
    width: '25%',
  },

  root: {
    display: "flex",
    margin: theme.spacing(1.5),
    gap: theme.spacing(3),
    alignItems: "center",
  },
}));

export default function Beef() {
  const classes = useStyles();

  // const [beefID, beefPID] = useState("");
  const [Region, setRegion] = useState("");
  const [Division, setDivision] = useState("");
  const [CPopulation, setCPopulation] = useState("");
  const [NeedPP, setNeedPP] = useState("");
  const [ConsuptionPY, setConsuptionPY] = useState("");
  const [SurplusDeficit, setSurplusDeficit] = useState("");
  const [AvgCWeight, setAvgCWeight] = useState("");
  const [productionValue, setPproductionValue] = useState("");

  function sendData(e){

    e.preventDefault();
    const newBeef = {
      Region,
      Division,
      CPopulation,
      NeedPP,
      ConsuptionPY,
      SurplusDeficit,
      AvgCWeight,
      productionValue
    }
    console.log(newBeef);
    //send http request
    axios.post("http://localhost:8070/beefProduction/addBeefProduction",newBeef).then(()=>{
        alert("New Beef added");
        // history("/login");
    }).catch((err)=>{
        alert(err)
    })

  }

  

  const Regi = [ // Regi = Region
    { label: 'Rathnapura', region: "Rathnapura" },
    { label: 'Kegalle', region: "Kegalle" },
  ];

  const Divi = [ // Divi = Division
    { label: 'Rabukkana', division: "Rabukkana" }, // Kegalle divisions list starts
    { label: 'Mavanalla', division: "Mavanalla" },
    { label: 'Aranayake', division: "Aranayake" },
    { label: 'Kegalle', division: "Kegalle" },
    { label: 'Galigamuwa', division: "Galigamuwa" },
    { label: 'Varakapola', division: "Varakapola" },
    { label: 'Ruwanwalla', division: "Ruwanwalla" },
    { label: 'Bulathkohupitiya', division: "Bulathkohupitiya" },
    { label: 'Yatiyanthota', division: "Yatiyanthota" },
    { label: 'Dehiowita', division: "Dehiowita" },
    { label: 'Daraniyagala', division: "Daraniyagala" },
    { label: 'Undugoda', division: "Undugoda" }, // Kegalle divisions list ends

    { label: 'Ahaliyagoda', division: "Ahaliyagoda" }, // Rathnapura divisions list starts
    { label: 'Kuruwita', division: "Kuruwita" },
    { label: 'Kiriella', division: "Kiriella" },
    { label: 'Rathnapura', division: "Rathnapura" },
    { label: 'Ibulpee', division: "Ibulpee" },
    { label: 'Balangoda', division: "Balangoda" },
    { label: 'Kalthota', division: "Kalthota" },
    { label: 'Oopanayeka', division: "Oopanayeka" },
    { label: 'Palmadulla', division: "Palmadulla" },
    { label: 'Elapaana', division: "Elapaana" },
    { label: 'Ayagama', division: "Ayagama" },
    { label: 'Kalawaana', division: "Kalawaana" },
    { label: 'Niwithigala', division: "Niwithigala" },
    { label: 'Kahawatte', division: "Kahawatte" },
    { label: 'Godakawela', division: "Godakawela" },
    { label: 'Weligepola', division: "Weligepola" },
    { label: 'Abilipitiya', division: "Abilipitiya" },
    { label: 'Kollonna', division: "Kollonna" }, // Rathnapura divisions list ends


  ];

  return (
    <ThemeProvider theme={theme}>
      
    <form className={classes.form} onSubmit={sendData}>
    
    <h1 className='h1'>Update Cattle Details</h1>
    <div className={classes.root}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 325 }}
      options={Regi}
      onChange={(e) => {
        setRegion(e.target.value);
      }}
      renderInput={(params) => <TextField {...params} label="Region" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 325 }}
      options={Divi}
      onChange={(e) => {
        setDivision(e.target.value);
      }}
      renderInput={(params) => <TextField {...params} label="Division" />}
    />
    </div>

        <TextField
          className={classes.input}
          label="Population"
          variant="outlined"
          name="species" // name from the animal object
          onChange={(e) => {
            setCPopulation(e.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Consuption per person"
          variant="outlined"
          name="age"
          onChange={(e) => {
            setNeedPP(e.target.value);
          }}
        />
        <TextField
          className={classes.input}
          label="Consumption per year"
          variant="outlined"
          color="primary"
          name="habitat"
          onChange={(e) => {
            setConsuptionPY(e.target.value);
          }}
        />

      <TextField
        className={classes.input}
        label="Surplus / Deficit"
        variant="outlined"
        name="Cattle Population" // name from the animal object
        onChange={(e) => {
          setSurplusDeficit(e.target.value);
        }}
      />
   

      <TextField
        className={classes.input}
        label="Avg weight of cows"
        variant="outlined"
        color='primary'
        name="habitat"
        onChange={(e) => {
          setAvgCWeight(e.target.value);
        }}
      />

      <TextField
        className={classes.input}
        label="Amount of cows to increase production"
        variant="outlined"
        color='primary'
        name="habitat"
        onChange={(e) => {
          setPproductionValue(e.target.value);
        }}
      />
   
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit">
        Submit
      </Button>
    </form>
    </ThemeProvider>
  );
}

