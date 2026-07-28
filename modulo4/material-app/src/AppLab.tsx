// src/AppLab.tsx

import { Box, AppBar, Toolbar, Typography, Container, Divider } from '@mui/material'
import LabMuiButtons from './lab/LabMuiButtons'
import LabMuiAlert   from './lab/LabMuiAlert'
import LabMuiCard    from './lab/LabMuiCard'
import LabMuiForm    from './lab/LabMuiForm'
import LabMuiTable   from './lab/LabMuiTable'

export default function AppLab() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 6 }}>
      {/* Barra superior */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" fontWeight={700}>
            Material UI v7 LAB - Vista Completa
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenido continuo */}
      <Container sx={{ py: 4, display: 'flex', flexDirection: 'column', gap: 5 }}>
        
        {/* --- 1. BUTTONS --- */}
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: 'primary.main' }}>
            1. Buttons
          </Typography>
          <LabMuiButtons />
        </Box>

        <Divider />

        {/* --- 2. ALERT --- */}
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: 'primary.main' }}>
            2. Alert
          </Typography>
          <LabMuiAlert />
        </Box>

        <Divider />

        {/* --- 3. CARDS --- */}
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: 'primary.main' }}>
            3. Cards
          </Typography>
          <LabMuiCard />
        </Box>

        <Divider />

        {/* --- 4. FORM --- */}
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: 'primary.main' }}>
            4. Form
          </Typography>
          <LabMuiForm />
        </Box>

        <Divider />

        {/* --- 5. TABLE --- */}
        <Box>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: 'primary.main' }}>
            5. Table
          </Typography>
          <LabMuiTable />
        </Box>

      </Container>
    </Box>
  )
}