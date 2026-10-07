import { Laptop, MenuBook } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

function Resume() {
    return (
        <>
            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1,
                },
            }}>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot color="warning">
                            <MenuBook color="action" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} className=' text-light'>
                        <Typography variant='h6'>
                            Education
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Rajamangala University of Technology Isan Khonkean Campus
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>2018-2023</div>
                            <div className=' small'> Bechelor's Degree, Computer Engineering</div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Roi Et Tachnical Collage
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>2016-2017</div>
                            <div className=' small'> Certificate of Technical Vocation, Technical Computer</div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>


            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1,
                },
            }}>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot color="warning">
                            <Laptop color="action" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} className=' text-light'>
                        <Typography variant='h6'>
                            Experience
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Software Engineer  |  Gotel Co. Ltd
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>Oct 2024 - Current</div>
                            <div className=' small'>
                                <ul>
                                    <li>Developed and designed CMS web applications using Next.js.</li>
                                    <li>Developed and designed APIs using NestJS.</li>
                                    <li>Maintained and migrated .NET and Angular projects to Node.js.</li>
                                    <li>Implemented Redis caching to reduce database load and improve API response time.</li>
                                    <li>Used n8n to automate tasks and reduce manual workload within the team.</li>
                                    <li>Used RabbitMQ to manage message queues and handle system logs.</li>
                                    <li>Migrated legacy microservices to Node.js microservice architecture.</li>
                                    <li>Created analytical and monitoring reports using Kibana for marketing and system insights.</li>
                                    <li>Refactored MSSQL stored procedures and optimized database performance for faster queries.</li>
                                    <li>Deployed applications on Docker running in a Linux environment.</li>
                                    <li>Resolved production issues based on user feedback and performed on-call duties to ensure system uptime.</li>
                                    <li>Created technical documentation and collaborated with cross-functional teams to deliver effective solutions.</li>
                                    <li>Provided system monitoring and issue resolution support during holidays.</li>
                                </ul>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Junior Web Developer | Plan Creations Co. Ltd
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>June 2023 - Sep 2024</div>
                            <div className=' small'>
                                <ul>
                                    <li>E-Commerce Development</li>
                                    <ul>
                                        <li>Developed and maintained eCommerce websites using Shopify.</li>
                                        <li>Designed UI/UX and landing pages to enhance user journey and conversion.</li>
                                    </ul>
                                    <li>Frontend Development</li>
                                    <ul>
                                        <li>Worked with Laravel and Angular for developing dynamic web interfaces.</li>
                                    </ul>
                                    <li>Backend Development</li>
                                    <ul>
                                        <li>Developed backend systems using Express.js and C# .NET Core.</li>
                                    </ul>
                                    <li>Database Management</li>
                                    <ul>
                                        <li>Oracle and MySQL databases</li>
                                    </ul>
                                </ul>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Full Stack Intern | MEE HAI GROUP CO., LTD
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>April 2021 - Auguse 2021</div>
                            <div className=' small'>
                                <ul>
                                    <li>
                                        Website Design
                                    </li>
                                    <ul>
                                        <li>
                                            Used Figma for designing website UX/UI
                                        </li>
                                    </ul>
                                    <li>
                                        Frontend Development
                                    </li>
                                    <ul>
                                        <li>
                                            Utilized Angular and Bootstrap 5 for frontend development
                                        </li>
                                    </ul>
                                    <li>
                                        Backend Development
                                    </li>
                                    <ul>
                                        <li>
                                            Employed C# and .NET for backend development
                                        </li>
                                    </ul>
                                    <li>
                                        Database Management
                                    </li>
                                    <ul>
                                        <li>
                                            Used MongoDB for database management
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default Resume