import React from 'react'
import html from '../../assets/html (2).png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import c from '../../assets/c.png'
import sql from '../../assets/sql.png'
import react from '../../assets/logo512.png'
import angular from '../../assets/angular.png'
import next from '../../assets/next.png'
import express from '../../assets/express-js.png'
import laravel from '../../assets/laravel.png'
import dotnet from '../../assets/NET_Core.png'
import boots from '../../assets/bootstrap.png'
import tail from '../../assets/tail.png'
import mongo from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import postg from '../../assets/postg.png'
import php from '../../assets/php.png'
import nestjs from '../../assets/NestJS.png'
import mssql from '../../assets/sql-server.jpg'
import { Image, Badge } from 'react-bootstrap'

function Skills() {
    return (
        <div className=' d-flex flex-column text-light'>
            <div className=' d-flex flex-column py-2'>
                <div className=' fs-5 fw-bold text-center text-sm-start'>
                    Language
                </div>
                <div className=' py-2 row row-cols-auto justify-content-center justify-content-sm-start'>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8  mx-auto object-fit-contain' src={html} />
                        <div className=' text-center small'> HTML </div>
                    </div>
                    <div className='col  d-flex flex-column py-2'>
                        <Image className='w-8 h-8  mx-auto  object-fit-contain ' src={css} />
                        <div className=' text-center small'> CSS </div>
                    </div>
                    <div className='col  d-flex flex-column py-2'>
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={c} />
                        <div className=' text-center small'> C# </div>
                    </div>
                    <div className='col  d-flex flex-column py-2'>
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={php} />
                        <div className=' text-center small'> PHP </div>
                    </div>
                    <div className='col  d-flex flex-column py-2'>
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={ts} />
                        <div className=' text-center small'> TypeScript </div>
                    </div>
                    <div className='col  d-flex flex-column py-2'>
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={sql} />
                        <div className=' text-center small'> SQL </div>
                    </div>

                    <div className='col  d-flex flex-column py-2'>
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={js} />
                        <div className=' text-center small'> JavsScript </div>
                    </div>
                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div className=' fs-5 fw-bold text-center text-sm-start'>
                    Full stack Framework
                </div>
                <div className=' py-2 row row-cols-auto justify-content-center justify-content-sm-start'>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8  mx-auto object-fit-contain' src={react} />
                        <div className=' text-center small'> React </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8  mx-auto object-fit-contain' src={angular} />
                        <div className=' text-center small'> Angular </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8  mx-auto object-fit-contain' src={laravel} />
                        <div className=' text-center small'> Laravel </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={next} />
                        <div className=' text-center small'> Next.js </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={express} />
                        <div className=' text-center small'> Express.js </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-auto object-fit-contain' src={dotnet} />
                        <div className=' text-center small'> .NET Core </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-16 h-8 mx-auto object-fit-contain' src={nestjs} />
                        <div className=' text-center small'> NestJS </div>
                    </div>

                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div className=' fs-5 fw-bold text-center text-sm-start'>
                    CSS Framework
                </div>
                <div className=' py-2 row row-cols-auto justify-content-start'>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-3 object-fit-contain' src={boots} />
                        <div className=' text-center small'> Bootstrap 5 </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-3  object-fit-contain' src={tail} />
                        <div className=' text-center small'> Taillwind </div>
                    </div>
                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div className=' fs-5 fw-bold text-center text-sm-start'>
                    Database
                </div>
                <div className=' py-2 row row-cols-auto justify-content-start'>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-3 object-fit-contain' src={mongo} />
                        <div className=' text-center small'> MongoDB </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-3 object-fit-contain' src={mysql} />
                        <div className=' text-center small'> MySQL </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-8 h-8 mx-3 object-fit-contain' src={postg} />
                        <div className=' text-center small'> PostgreSQL </div>
                    </div>
                    <div className='col d-flex flex-column py-2' >
                        <Image className='w-16 h-8 mx-3 object-fit-contain' src={mssql} />
                        <div className=' text-center small'> Microsoft SQL Server </div>
                    </div>
                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div className=' fs-5 fw-bold text-center text-sm-start'>
                    Tools & Libraries
                </div>
                <div className=' py-2 d-flex flex-wrap gap-2 justify-content-center justify-content-sm-start'>
                    {['Redis', 'n8n', 'RabbitMQ', 'ELK Stack', 'Microservices', 'Background Services', 'Prisma', 'Fastify', 'HeroUI', 'NextAuth', 'Swagger'].map((t) =>
                        <Badge key={t} bg='secondary' className=' fw-normal'>{t}</Badge>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Skills