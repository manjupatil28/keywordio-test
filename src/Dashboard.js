import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, 
Select, MenuItem, Typography, Switch, IconButton } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PieChart from './PieChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import PieChartIcon from '@material-ui/icons/PieChart';

const campaignData = [
    { campaign: "Cosmetics", clicks: 712, cost: 4272, conversions: 8, revenue: 16568 },
    { campaign: "Serums", clicks: 3961, cost: 27331, conversions: 115, revenue: 362526 },
    { campaign: "Facewash", clicks: 9462, cost: 76831, conversions: 123, revenue: 266800 },
    { campaign: "Shampoos", clicks: 439, cost: 2151, conversions: 5, revenue: 11029 },
    { campaign: "Conditioners", clicks: 1680, cost: 3684, conversions: 49, revenue: 175245 },
    { campaign: "Facewash2", clicks: 4978, cost: 29370, conversions: 189, revenue: 623106 },
    { campaign: "Total", clicks: 26510, cost: 143819, conversions: 489, revenue: 1573563 }
];

const groupData = [
    { group: "Male", clicks: 348, cost: 12528, conversions: 42, revenue: 62118 },
    { group: "Female", clicks: 692, cost: 24912, conversions: 35, revenue: 5175 },
    { group: "Unknown", clicks: 105, cost: 3943, conversions: 3, revenue: 4489 },
    { group: "Total", clicks: 1145, cost: 41383, conversions: 80, revenue: 71782 }
];
const Dashboard = () => {
    const [column1, setColumn1] = useState('clicks');
    const [column2, setColumn2] = useState('clicks');
    const [showChart, setShowChart] = useState(false);
    const [sortOrder1, setSortOrder1] = useState(true);
    const [sortOrder2, setSortOrder2] = useState(true);
    const [sortType1, setSortType1] = useState("");
    const [sortType2, setSortType2] = useState("");

    const toggleView = () => setShowChart(!showChart);


    const toggleSortOrder1 = () => {
        setSortOrder1(!sortOrder1);
        setSortType1(sortType1 !== "asc" ? "asc" : "desc");
    }

    const toggleSortOrder2 = () => {
        setSortOrder2(!sortOrder2);
        setSortType2(sortType2 !== "asc" ? "asc" : "desc");
    }

    const sortData = (data, prop, sortOrder) => {
        return data.sort((a, b) => {
            if (a[prop] < b[prop]) { return sortOrder ? -1 : 1; }
            if (a[prop] > b[prop]) { return sortOrder ? 1 : -1; }
            return 0;
        });
    };

    const campaignDataSorted = sortType1 !== '' ? sortData(campaignData, column1, sortOrder1).filter((x) => x.campaign !== "Total").concat(campaignData.filter((x) => x.campaign === "Total")) : campaignData;
    const groupDataSorted = sortType2 !== '' && !showChart ? sortData(groupData, column2, sortOrder2).filter((x) => x.group !== "Total").concat(groupData.filter((x) => x.group === "Total")) : groupData;

    return (
        <div style={{ marginTop: '20px' }}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TableContainer component={Paper} style={{ height: 462 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography variant="subtitle1">Ad Insights</Typography>
                                    </TableCell>
                                    <TableCell align="right" colSpan={4}>
                                        <IconButton onClick={toggleSortOrder1}>
                                            {sortOrder1 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Campaigns</TableCell>
                                    <TableCell>Clicks</TableCell>
                                    <TableCell>Cost</TableCell>
                                    <TableCell>Conversions</TableCell>
                                    <TableCell>Revenue</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {campaignDataSorted.map((row) => (
                                    <TableRow key={row.campaign}>
                                        <TableCell>{row.campaign}</TableCell>
                                        <TableCell>{row.clicks}</TableCell>
                                        <TableCell>{row.cost}</TableCell>
                                        <TableCell>{row.conversions}</TableCell>
                                        <TableCell>{row.revenue}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer component={Paper} style={{ height: 462 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <Grid container justifyContent="space-between" alignItems="center">
                                            <Typography variant="subtitle1">Ad Insights</Typography>
                                            {showChart &&
                                            <Select value={column2} onChange={(event) => setColumn2(event.target.value)}>
                                                <MenuItem value={"clicks"}>Clicks</MenuItem>
                                                <MenuItem value={"cost"}>Cost</MenuItem>
                                                <MenuItem value={"conversions"}>Conversions</MenuItem>
                                                <MenuItem value={"revenue"}>Revenue</MenuItem>
                                            </Select>
                                        }
                                        </Grid>
                                    </TableCell>
                                    {!showChart &&
                                        <TableCell align="right" colSpan={4}>
                                            <IconButton onClick={toggleSortOrder2}>
                                                {sortOrder2 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                                            </IconButton>
                                        </TableCell>
                                    }
                                </TableRow>
                            </TableHead>
                            {showChart ? (
                                <>
                                    <PieChart data={groupDataSorted} column={column2} />
                                </>
                            ) : (
                            <>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Group</TableCell>
                                        <TableCell>Clicks</TableCell>
                                        <TableCell>Cost</TableCell>
                                        <TableCell>Conversions</TableCell>
                                        <TableCell>Revenue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {groupDataSorted.map((row) => (
                                        <TableRow key={row.group}>
                                            <TableCell>{row.group}</TableCell>
                                            <TableCell>{row.clicks}</TableCell>
                                            <TableCell>{row.cost}</TableCell>
                                            <TableCell>{row.conversions}</TableCell>
                                            <TableCell>{row.revenue}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                </>
                            )}
                        </Table>
                        <Grid container alignItems="center" justify="flex-end" style={{ position: 'absolute', right: 0, bottom: 60, width: '100%' }}>
                            <Grid item>
                                <Switch
                                    checked={showChart}
                                    onChange={toggleView}
                                    icon={<TableChartIcon />}
                                    checkedIcon={<PieChartIcon />}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
                                        }
export default Dashboard;  