import React, { useState } from 'react'
import { Col, Image, Modal, Row } from 'react-bootstrap'
import pif from '../../../assets/Product Information.png'
import pos from '../../../assets/6ecb91e73eab30f51b0b29a880338147.png'
import fb from '../../../assets/facebook-logo-facebook-icon-transparent-free-png.webp'
import cms_gomoads from '../../../assets/cms_gomoads.png'
import notify from '../../../assets/notify_service.svg'
import n8nImg from '../../../assets/n8n_automation.svg'
import mini from '../../../assets/mini_commerce.svg'
import stockapi from '../../../assets/stock.png'
function BackEnd() {
    const [select, setSelece] = useState(0)
    const [zoomImg, setZoomImg] = useState(null)
    const Details = [{
        name: 'SMS Delivery Report Notify',
        type: 'company',
        des: 'Node.js + Express + TypeScript + node-schedule + RabbitMQ + Prisma + SQL Server',
        work: 'Background microservice that forwards SMS delivery reports (DR) to partners: scheduled batching, RabbitMQ queue, XML/JSON notify and retry via delay queue.',
        img: notify,
        zoom: true
    }, {
        name: 'n8n Automation',
        type: 'company',
        des: 'n8n',
        work: 'Multiple workflows triggered by email or schedule to reduce manual team work and support system monitoring.',
        img: n8nImg,
        zoom: true
    }, {
        name: 'CMS Gomoads API',
        type: 'company',
        des: 'NestJS + Fastify + Prisma + SQL Server',
        work: 'REST API for the Gomoads CMS: advertisers, campaigns, offers, traffic sources, users and audit trail.',
        img: cms_gomoads
    }, {
        name: 'PIF BackEnd',
        type: 'company',
        des: 'Laravel (PHP)',
        work: 'Frontend and backend of the product information website.',
        img: pif
    }, {
        name: 'Stock Ecom API',
        type: 'company',
        des: 'C# .NET Core + MySQL',
        work: 'REST API for stock management.',
        img: stockapi
    }, {
        name: 'Mini Commerce API',
        type: 'personal',
        des: 'NestJS + Prisma + MySQL',
        work: 'REST API for orders, inventory and promotions with atomic stock updates to prevent overselling.',
        img: mini,
        zoom: true
    }, {
        name: 'Facebook API',
        type: 'personal',
        des: 'Node.js + Express.js + MongoDB',
        work: 'REST API for the social web app.',
        img: fb
    }, {
        name: 'POS System API (Internship)',
        type: 'company',
        des: 'ASP.NET Core + MongoDB',
        work: 'REST API for the point-of-sale system.',
        img: pos
    }]
    return (
        <>
            {[['company', 'Company Projects'], ['personal', 'Personal Projects']].map(([type, title]) =>
                <div key={type}>
                    <div className=' fs-5 fw-bold text-light text-center text-sm-start mt-4'>{title}</div>
                    <Row className=' row-cols-2 animation my-3 '>
                        {Details.filter((d) => d.type === type).map((data, i) =>
                    <Col className='' key={i}>
                        <div className=' py-1 py-md-2'>
                            <Image className=' d-block m-auto w-50 h-50 object-fit-contain hover' rounded src={data.img}
                                style={data.zoom ? { cursor: 'zoom-in' } : undefined}
                                onClick={data.zoom ? () => setZoomImg(data.img) : undefined} />
                            <div className=' text-center py-1 fs-6 fw-bold'>{data.name} </div>
                            <div className=' text-center w-100 small'>{data.des} </div>
                            <div className=' text-center w-100 small text-secondary'>{data.work} </div>
                        </div>
                    </Col>
                        )}
                    </Row>
                </div>
            )}
            <Modal show={zoomImg !== null} onHide={() => setZoomImg(null)} size='xl' centered contentClassName='bg-transparent border-0'>
                <Image className=' w-100' rounded src={zoomImg} style={{ cursor: 'zoom-out' }} onClick={() => setZoomImg(null)} />
            </Modal>
        </>
    )
}

export default BackEnd