import React, { useState } from 'react'
import './FrontEnd.css'
import { Col, Image, Modal, Row } from 'react-bootstrap'
import pif from '../../../assets/pif.png'
import pos from '../../../assets/pos.png'
import fb from '../../../assets/face web.png'
import plantoys from '../../../assets/plantoys.png'
import mini from '../../../assets/mini_commerce_store.png'
import port from '../../../assets/port.png'
import web from '../../../assets/web.png'
import stockweb from '../../../assets/stockweb.png'
import cms_gomoads from '../../../assets/cms_gomoads.png'
import { Link } from 'react-router-dom'

function FrontEnd() {
    const [zoomImg, setZoomImg] = useState(null)
    const Details = [{
        name: 'CMS Gomoads',
        type: 'company',
        des: 'Next.js + React + TypeScript + HeroUI + Tailwind',
        work: 'CMS for managing advertisers, campaigns, offers, traffic sources and telco / cost-model settings.',
        img: cms_gomoads,
        url: 'https://cms.gomoads.com/apps'
    }, {
        name: 'Website PIF',
        type: 'company',
        des: 'Laravel Blade + Bootstrap 5',
        work: 'Product information system for Plantoys.',
        img: pif,
        url: 'https://webapps.plantoys.com/plantoys_pif/login'
    }, {
        name: 'Stock Ecom Plantoys',
        type: 'company',
        des: 'Angular (TypeScript) + Bootstrap 5',
        work: 'Stock management web for e-commerce.',
        img: stockweb
    }, {
        name: 'Facebook copy',
        type: 'personal',
        des: 'React + Tailwind',
        work: 'Facebook-style social web app.',
        img: fb
    }, {
        name: 'POS System (Internship)',
        type: 'company',
        des: 'Angular + Bootstrap 5',
        work: 'Point-of-sale web application.',
        img: pos
    }, {
        name: 'Mini Commerce',
        type: 'personal',
        des: 'Next.js + React + TypeScript + Tailwind',
        work: 'Online store with an admin dashboard for orders, products, stock and promotions.',
        img: mini,
        zoom: true,
        url: 'https://chiloper.github.io/Mini-Commerce-Order-Inventory-Management-System/'
    }, {
        name: 'Portfolio',
        type: 'personal',
        des: 'React + Bootstrap 5',
        work: 'Personal portfolio website.',
        img: port
    }, {
        name: 'Plantoys',
        type: 'company',
        des: 'Shopify',
        work: 'E-commerce storefront.',
        img: plantoys,
        url: 'https://th.plantoys.com/'
    }]
    return (
        <>
            {[['company', 'Company Projects'], ['personal', 'Personal Projects']].map(([type, title]) =>
                <div key={type}>
                    <div className=' fs-5 fw-bold text-light text-center text-sm-start mt-4'>{title}</div>
                    <Row className=' row-cols-2 animation my-3 '>
                        {Details.filter((d) => d.type === type).map((data, i) =>
                    <Col className='' key={i}>
                        <div className=' py-3 py-md-4'>
                            <Image className=' d-block m-auto w-75 h-75 object-fit-contain hover' rounded src={data.img}
                                style={data.zoom ? { cursor: 'zoom-in' } : undefined}
                                onClick={data.zoom ? () => setZoomImg(data.img) : undefined} />
                            <div className=' text-center py-1 fs-6 fw-bold'>{data.name} </div>
                            <div className=' text-center w-100 small'>{data.des} </div>
                            <div className=' text-center w-100 small text-secondary'>{data.work} </div>
                            {data.url &&
                                <div className=' m-auto w-25 h-25 my-2 d-flex justify-content-center' >
                                    <Link to={data.url} target='_blank' className=' w-50'>
                                        <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={web} />
                                    </Link>
                                </div>
                            }
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

export default FrontEnd