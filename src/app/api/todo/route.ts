import prisma from '@/app/lib/prima'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(request: Request) { 
    //obtenemos los datos por query
    const { searchParams } = new URL(request.url)
    const take = +(searchParams.get('take')?? '10');
    const skip = +(searchParams.get('skip')?? '0');

    if(isNaN(take)) return NextResponse.json({message:'Take tiene que ser un numero '},{status:400});
    if(isNaN(take)) return NextResponse.json({message:'skip tiene que ser un numero '},{status:400});

    const todos=await prisma.todo.findMany({
        take,
        skip,
    });

    return NextResponse.json(todos);
}


const postSchema=yup.object(
    //definimos como queda el objeto
    {
        description: yup.string().required(),
        complete: yup.boolean().optional().default(false),
    }
    )

export async function POST(request: Request) { 
 
    try {        
        const body=await postSchema.validate(await request.json());     
        const todo= await prisma.todo.create({data:body});
        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json(error,{status:400});
    }
}
export async function DELETE() { 
 
    try {            
        const todo= await prisma.todo.deleteMany({where:{complete:true}});
        return NextResponse.json('exito');
    } catch (error) {
        return NextResponse.json(error,{status:400});
    }
}