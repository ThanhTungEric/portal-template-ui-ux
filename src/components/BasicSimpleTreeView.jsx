import './BasicSimpleTreeView.css';

import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoFull06 from "../assets/LOGO/VGU Full Color logo-05.png"; // ✅ logo

export default function BasicSimpleTreeView() {
  const navigate = useNavigate();

  const handleSelect = (event, itemIds) => {
    const itemId = Array.isArray(itemIds) ? itemIds[0] : itemIds;

    switch (itemId) {
      case 'Introduction':
        navigate('/introduction');
        break;
      case 'LoginForm':
        navigate('/login/form');
        break;
      case 'ForgotPassword':
        navigate('/login/forgot');
        break;
      case 'Buttons':
        navigate('/input/button');
        break;
      case 'Loading':
        navigate('/input/loading');
        break;
      case 'InputComponents':
        navigate('/input/components');
        break;
      case 'FormComponents':
        navigate('/input/form');
        break;
      case 'Icon':
        navigate('/data/icon');
        break;
      case 'List':
        navigate('/data/list');
        break;
      case 'Table':
        navigate('/data/table');
        break;
      case 'Menu':
        navigate('/menu');
        break;
      case 'Alert':
        navigate('/feedback/alert');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <Box sx={{ textAlign: 'center', p: 1 }}>
        <img
          src={LogoFull06}
          alt="VGU Logo"
          onClick={() => navigate('/')}
          style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
        />
      </Box>


      <SimpleTreeView onSelectedItemsChange={handleSelect}>
        <TreeItem
          itemId="Introduction"
          label={<span className="tree-label">Giới thiệu</span>}
          slotProps={{ expandIcon: { className: 'tree-icon' }, collapseIcon: { className: 'tree-icon' } }}
        />
        <TreeItem
          itemId="Login"
          label={<span className="tree-label">Đăng nhập</span>}
          slotProps={{ expandIcon: { className: 'tree-icon' }, collapseIcon: { className: 'tree-icon' } }}
        >
          <TreeItem itemId="LoginForm" label="Form đăng nhập" />
          <TreeItem itemId="ForgotPassword" label="Quên mật khẩu" />
        </TreeItem>
        <TreeItem
          itemId="Inputs"
          label={<span className="tree-label">Inputs</span>}
          slotProps={{ expandIcon: { className: 'tree-icon' }, collapseIcon: { className: 'tree-icon' } }}
        >
          <TreeItem itemId="Buttons" label="Button" />
          <TreeItem itemId="Loading" label="Loading" />
          <TreeItem itemId="InputComponents" label="Checkbox" />
          <TreeItem itemId="FormComponents" label="Input" />
        </TreeItem>
        <TreeItem
          itemId="Datadisplay"
          label={<span className="tree-label">Data display</span>}
          slotProps={{ expandIcon: { className: 'tree-icon' }, collapseIcon: { className: 'tree-icon' } }}
        >
          <TreeItem itemId="Icon" label="Icon" />
          <TreeItem itemId="List" label="List" />
          <TreeItem itemId="Table" label="Table" />
        </TreeItem>
        <TreeItem
          itemId="Feedback"
          label={<span className="tree-label">Feedback</span>}
          slotProps={{ expandIcon: { className: 'tree-icon' }, collapseIcon: { className: 'tree-icon' } }}
        >
          <TreeItem itemId="Alert" label="Alert" />
          <TreeItem itemId="Dialog" label="Dialog" />
          <TreeItem itemId="Progress" label="Progress" />
          <TreeItem itemId="snackbar" label="Snackbar" />
        </TreeItem>
        <TreeItem
          itemId="Menu"
          label={<span className="tree-label">Menu</span>}
          slotProps={{ expandIcon: { className: 'tree-icon' }, collapseIcon: { className: 'tree-icon' } }}
        />
      </SimpleTreeView>
    </Box>
  );
}
