import * as React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TextField,
  CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function FormComponents() {
  const [copiedIndex, setCopiedIndex] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard',
    'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner',
    'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'
  ];

  const getStyles = (name, selected, theme) => {
    return {
      fontWeight: selected.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  };

  const handleMultiSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const formCodeBlocks = [
    {
      label: 'Text Fields',
      preview: (
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
      ),
      code: `import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

<Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
  <TextField label="Outlined" variant="outlined" />
  <TextField label="Filled" variant="filled" />
  <TextField label="Standard" variant="standard" />
</Box>`
    },
    {
      label: 'Multiple Select',
      preview: (
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleMultiSelectChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
      code: `import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';

<FormControl sx={{ m: 1, width: 300 }}>
  <InputLabel id="demo-multiple-name-label">Name</InputLabel>
  <Select
    labelId="demo-multiple-name-label"
    id="demo-multiple-name"
    multiple
    value={value}
    onChange={handleChange}
    input={<OutlinedInput label="Name" />}
    MenuProps={MenuProps}
  >
    {names.map((name) => (
      <MenuItem key={name} value={name}>
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>`
    },
  ];

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  if (loading) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h6" gutterBottom>Đang tải các thành phần form...</Typography>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={4}>
        {formCodeBlocks.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>{item.label}</Typography>
              <Box sx={{ mb: 2 }}>{item.preview}</Box>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="subtitle2">Code</Typography>
                <Button size="small" startIcon={<ContentCopyIcon />} onClick={() => handleCopy(item.code, index)}>
                  {copiedIndex === index ? 'Đã copy!' : 'Copy code'}
                </Button>
              </Box>
              <SyntaxHighlighter language="jsx" style={oneDark} wrapLongLines>
                {item.code}
              </SyntaxHighlighter>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
