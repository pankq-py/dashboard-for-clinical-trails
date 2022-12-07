import MaterialTable, { MTableToolbar } from 'material-table';

import React, { useState } from 'react';

function LatestProjects() {
    const [tableData, setTableData] = useState([
        { name: "CALERIE", sDate: '12/11/2019', eDate: '12/25/2020', status: 'Done', asignee: 'Rachel Green'},
        { name: "ALMANAC", sDate: '06/23/2018', eDate: '09/09/2021', status: 'In Progress', asignee: 'Ross Geller' },
        { name: "PARAMOUNT trial", sDate: '01/14/2018', eDate: '02/02/2022', status: 'Failed', asignee: 'Chandler Bing' },
        { name: "JUPITER trial", sDate: '04/04/2019', eDate: '05/07/2020', status: 'Done', asignee: 'Monica Geller' },
        { name: "ASTEROID trial", sDate: '01/19/2019', eDate: '11/30/2019', status: 'Pending', asignee: 'Phoebe Buffay' },
        { name: "PROVE-IT TIMI 22", sDate: '02/01/2020', eDate: '06/01/2021', status: 'Done', asignee: 'Joey Tribbiani' },
        { name: "RECOVERY trial", sDate: '03/30/2021', eDate: '02/27/2022', status: 'Done', asignee: 'Janice Hosenstein' },

    ]);

    const columns = [
        { title: "Name", field: "name" },
        { title: "Start Date", field: "sDate", type: "date" },
        { title: "End Date", field: "eDate", type: "date" },
        { title: "Status", field: "status" },
        { title: "Asignee", field: "asignee" },
    ]

    return (
        <div>
            <MaterialTable
                title="Project Details"
                columns={columns}
                data={tableData}
                // Multiple Actions Example : actions -> save, delete
                actions={[
                    rowData => ({
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                        disabled: rowData.age <= 25
                    }),
                    {
                        icon: 'add',
                        tooltip: 'Add User',
                        isFreeAction: true,
                        onClick: (event) => alert("You want to add a new row")
                    }
                ]}
                // Positioning Actions Column Preview
                options={{
                    // sitioning Actions Column Example
                    actionsColumnIndex: -1,
                    fixedColumns: {
                        left: 1, 
                        right: 0
                      },
                    // Basic Export Example
                    exportButton: true,
                }}
            >
            </MaterialTable>
        </div>
    );
}
export default LatestProjects;