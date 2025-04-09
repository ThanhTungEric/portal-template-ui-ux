import * as React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Button,
  Stack,
  CircularProgress
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Switch from '@mui/material/Switch';
import DividerMUI from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function InputComponentsShowcase() {
  const [copiedIndex, setCopiedIndex] = React.useState(null);
  const [ratingValue, setRatingValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
    const [loading, setLoading] = React.useState(true);
  const [radioValue, setRadioValue] = React.useState('female');
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const labels = {
    0.5: 'Useless', 1: 'Useless+', 1.5: 'Poor', 2: 'Poor+', 2.5: 'Ok', 3: 'Ok+',
    3.5: 'Good', 4: 'Good+', 4.5: 'Excellent', 5: 'Excellent+'
  };

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      borderRadius: theme.shape.borderRadius,
      '&.Mui-disabled': {
        border: 0,
      },
    },
    '& .MuiToggleButtonGroup-middleButton,& .MuiToggleButtonGroup-lastButton': {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
  }));

  const codeBlocks = [
    {
      label: 'Checkboxes',
      preview: (
        <div>
          <Checkbox defaultChecked />
          <Checkbox />
          <Checkbox disabled />
          <Checkbox disabled checked />
        </div>
      ),
      code: `import Checkbox from '@mui/material/Checkbox';

<Checkbox defaultChecked />
<Checkbox />
<Checkbox disabled />
<Checkbox disabled checked />`
    },
    {
      label: 'Labeled Checkboxes',
      preview: (
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      ),
      code: `import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>`
    },
    {
      label: 'Radio Group',
      preview: (
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      ),
      code: `import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

<FormControl>
  <FormLabel>Gender</FormLabel>
  <RadioGroup value={value} onChange={handleChange}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>`
    },
    {
      label: 'Rating',
      preview: (
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
          <Rating
            name="hover-feedback"
            value={ratingValue}
            precision={0.5}
            getLabelText={(value) => `${value} Stars, ${labels[value]}`}
            onChange={(event, newValue) => setRatingValue(newValue)}
            onChangeActive={(event, newHover) => setHover(newHover)}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {ratingValue !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ratingValue]}</Box>
          )}
        </Box>
      ),
      code: `import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

<Rating
  name="hover-feedback"
  value={value}
  precision={0.5}
  getLabelText={getLabelText}
  onChange={handleChange}
  onChangeActive={handleHover}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box>{labels[value]}</Box>`
    },
    {
      label: 'Switches',
      preview: (
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <FormControlLabel required control={<Switch />} label="Required" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
      ),
      code: `import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

<FormGroup>
  <FormControlLabel control={<Switch defaultChecked />} label="Label" />
  <FormControlLabel required control={<Switch />} label="Required" />
  <FormControlLabel disabled control={<Switch />} label="Disabled" />
</FormGroup>`
    },
    {
      label: 'Toggle Buttons',
      preview: (
        <Paper elevation={0} sx={{ display: 'flex', border: '1px solid #ccc', flexWrap: 'wrap' }}>
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={(e, val) => setAlignment(val)}
          >
            <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
            <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
            <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
            <ToggleButton value="justify" disabled><FormatAlignJustifyIcon /></ToggleButton>
          </StyledToggleButtonGroup>
          <DividerMUI flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={(e, val) => setFormats(val)}
          >
            <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
            <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
            <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
            <ToggleButton value="color" disabled>
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
      ),
      code: `import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

<ToggleButtonGroup value={value} onChange={handleChange}>
  <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
</ToggleButtonGroup>`
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
        <Typography variant="h6" gutterBottom>Đang tải các Checkbox</Typography>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Grid container spacing={4}>
        {codeBlocks.map((item, index) => (
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
