import { NextResponse } from 'next/server'
import { connectToMongoDB } from 'lib/db'
import NewProduct from 'models/NewProduct'

export async function GET() {
  try {
    await connectToMongoDB()

    const newProducts = await NewProduct.find({})

    if (newProducts) {
      return NextResponse.json(newProducts, { status: 200 })
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
