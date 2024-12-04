import React from 'react';
import './RelatedItems.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardContent, Chip } from '@mui/material';

function RelatedItems() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Roadmap items
                </AccordionSummary>
                <AccordionDetails style={{gap: '8px', display: 'flex', flexDirection: 'column'}}>
                    <Card>
                        <CardContent className='card-content-container'>
                            <span style={{width: '100%'}}>
                                <a className='title'>Monthly Active Visitors</a>
                                <br />
                                <span className='description-container'>
                                    <p className='body-text'>2025 Marketing Roadmap &bull;</p>
                                    <Chip className='chip' label="Marketing" size="small" variant="outlined" />
                                    <Chip className='chip' label="+ 2 more" size="small" variant="outlined" />
                                </span>
                            </span>
                            <span className='percent-container'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20Z" fill="#C0E2FC"/>
                                    <path d="M20 2C20 0.895432 20.8977 -0.0103645 21.9967 0.0999031C25.5099 0.452374 28.88 1.73037 31.7557 3.81966C35.1727 6.30222 37.716 9.80279 39.0211 13.8197C40.3263 17.8365 40.3263 22.1635 39.0211 26.1803C37.716 30.1972 35.1727 33.6978 31.7557 36.1803C28.3387 38.6629 24.2236 40 20 40C15.7764 40 11.6612 38.6629 8.24429 36.1803C4.82734 33.6978 2.28403 30.1972 0.978867 26.1803C-0.119537 22.7998 -0.293537 19.1996 0.456863 15.7495C0.69162 14.6702 1.83047 14.0964 2.88099 14.4377C3.93149 14.779 4.49306 15.9067 4.28537 16.9915C3.77997 19.6314 3.94588 22.3676 4.78309 24.9443C5.82722 28.1578 7.86187 30.9582 10.5954 32.9443C13.329 34.9303 16.6211 36 20 36C23.3789 36 26.671 34.9303 29.4046 32.9443C32.1381 30.9582 34.1728 28.1578 35.2169 24.9443C36.261 21.7308 36.261 18.2692 35.2169 15.0557C34.1728 11.8422 32.1381 9.04178 29.4046 7.05573C27.2127 5.46325 24.6617 4.45994 21.9949 4.12483C20.8989 3.98711 20 3.10457 20 2Z" fill="#0A6CB9"/>
                                </svg>
                                <span style={{display: 'flex', flexDirection: 'column'}}>
                                    <p className='percent-num'>80%</p>
                                    <p className='percent-text'>complete</p>
                                </span>
                            </span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='card-content-container'>
                            <span style={{width: '100%'}}>
                                <a className='title'>Dashboard as an additional widget</a>
                                <br />
                                <span className='description-container'>
                                    <p className='body-text'>2025 Product Roadmap &bull;</p>
                                    <Chip className='chip' label="Engineering" size="small" variant="outlined" />
                                    <Chip className='chip' label="+ 2 more" size="small" variant="outlined" />
                                </span>
                            </span>
                            <span className='percent-container'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20Z" fill="#F0782D" fill-opacity="0.3"/>
                                    <path d="M20 2C20 0.895432 20.8977 -0.0103645 21.9967 0.0999031C25.5099 0.452374 28.88 1.73037 31.7557 3.81966C35.1727 6.30222 37.716 9.80279 39.0211 13.8197C40.3263 17.8365 40.3263 22.1635 39.0211 26.1803C37.9227 29.5609 35.9474 32.5757 33.3124 34.9259C32.488 35.6611 31.2294 35.4559 30.5801 34.5623C29.9309 33.6687 30.1394 32.4263 30.9451 31.6707C32.9056 29.8321 34.3797 27.521 35.2169 24.9443C36.261 21.7308 36.261 18.2692 35.2169 15.0557C34.1728 11.8422 32.1381 9.04178 29.4046 7.05573C27.2127 5.46325 24.6617 4.45994 21.9949 4.12483C20.8989 3.98711 20 3.10457 20 2Z" fill="#F0782D"/>
                                </svg>
                                <span style={{display: 'flex', flexDirection: 'column'}}>
                                    <p className='percent-num'>40%</p>
                                    <p className='percent-text'>complete</p>
                                </span>
                            </span>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='card-content-container'>
                            <span style={{width: '100%'}}>
                                <a className='title'>Introduce a Strategy Framework</a>
                                <br />
                                <span className='description-container'>
                                    <p className='body-text'>Customer Success Roadmap &bull;</p>
                                    <Chip className='chip' label="Customer Success" size="small" variant="outlined" />
                                </span>
                            </span>
                            <span className='percent-container'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20Z" fill="#F0782D" fill-opacity="0.3"/>
                                    <path d="M20 2C20 0.895432 20.8976 -0.0103569 21.9967 0.0999184C23.9382 0.294716 25.8443 0.772964 27.6537 1.52241C30.0802 2.5275 32.285 4.00069 34.1421 5.85786C35.9993 7.71504 37.4725 9.91982 38.4776 12.3463C39.227 14.1557 39.7053 16.0618 39.9001 18.0033C40.0104 19.1024 39.1046 20 38 20C36.8954 20 36.0129 19.1011 35.8752 18.0052C35.6973 16.5895 35.3304 15.2009 34.7821 13.8771C33.978 11.9359 32.7994 10.172 31.3137 8.68629C29.828 7.20055 28.0641 6.022 26.1229 5.21793C24.7991 4.6696 23.4105 4.30273 21.9948 4.12484C20.8989 3.98713 20 3.10457 20 2Z" fill="#F0782D"/>
                                </svg>
                                <span style={{display: 'flex', flexDirection: 'column'}}>
                                    <p className='percent-num'>25%</p>
                                    <p className='percent-text'>complete</p>
                                </span>
                            </span>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>
            <hr/>
        </div>
    );
}

export default RelatedItems;
