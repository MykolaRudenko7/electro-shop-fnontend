import { NextResponse } from 'next/server'
import { connectToMongoDB } from 'lib/db'
import Laptop from 'models/Laptop'

export async function GET() {
  try {
    await connectToMongoDB()

    const laptops = await Laptop.find({})

    if (laptops) {
      return NextResponse.json(laptops, { status: 200 })
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
