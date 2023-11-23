import prisma from '@/app/lib/prima'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    // const todo=await prisma.todo.create({
    //     data:{
    //         description:'piedra del alma',
    //         complete:true
    //     }
    // })

    await prisma.todo.createMany({
        data:
        [
            {description:'piedra del alma',complete:true},
            {description:'piedra del poder'},
            {description:'piedra del espacio'},
            {description:'piedra del realidad'},
        ]
    })


    return NextResponse.json({message:"seed Executed"})
}