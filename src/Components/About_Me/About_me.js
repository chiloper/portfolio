import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import about from '../../assets/about.png'

function About_me() {
    return (
        <div>
            <Row className=' justify-content-center mt-5 gap-3 '>
                <Col sm={4} className='d-flex d-sm-block justify-content-center'>
                    <Image className='w-sm-100 w-75 d-block m-auto shadow p-2' src={about} rounded />
                </Col>
                <Col sm={6} className='text-light px-5 px-sm-0'>
                    <div className=' fs-5 fw-bold text-center text-sm-start'> About Me</div>
                    <div className='mt-2 text-center text-sm-start'>
                        Hello! Welcome to my website, I’m <b>Chirapong Phomphoo</b>, a <b>Full Stack Software Engineer</b> with a Bachelor's Degree in Computer Engineering,
                        experienced in modern web development, system optimization, and automation. <br /><br />
                        I build CMS web applications with <b>Next.js</b> and design APIs with <b>NestJS</b>, working across JavaScript/TypeScript, Node.js, React, Angular, Laravel and .NET.
                        I also migrate legacy systems to Node.js microservices, speed up APIs with <b>Redis</b> caching, optimize <b>MSSQL</b> queries,
                        and use <b>RabbitMQ</b>, <b>n8n</b> and <b>Docker</b> on Linux to keep systems reliable and reduce manual work. <br /><br />
                        Most of my work is on background services in a <b>microservice</b> architecture, where many apps work together through message queues, such as an
                        SMS delivery report notify service built with <b>Node.js</b>, scheduled jobs, <b>RabbitMQ</b> and <b>Prisma</b> that notifies partners with automatic retries. <br /><br />
                        I enjoy solving problems, working with my team, and keeping production healthy through monitoring, Kibana reports and clear documentation.
                        I love learning new technologies, and I collaborate with AI agents to speed up development and create efficient, scalable web solutions.
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About_me