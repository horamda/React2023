import React from 'react'

export default function Prueba() {
  return (
    <DataGrid
  density="compact"
  hideFooter
  rows={[
    {
      desk: 'D-985',
      commodity: 'Adzuki bean',
      traderName: 'Roy Green',
      quantity: '83,996',
      filledQuantity: 1,
      status: 'PartiallyFilled',
    },
  ]}
  columns={[ // column definition example
    {
      field: 'filledQuantity',
      headerName: 'Filled',
      editable: true,
      renderCell: (params) => <ProgressBar value={Number(params.value)} />,
      renderEditCell: (params) => <EditProgress {...params} />,
    },
  ]}
/>
  )
}
