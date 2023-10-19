import { connectToMongoDB } from 'lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  const collectionName = process.env.LAPTOPS_COLLECTION

  try {
    const database = await connectToMongoDB()

    if (database) {
      const laptops = await database
        .collection(collectionName)
        .find({})
        .sort({ name: -1 })
        .toArray()

      return NextResponse.json(laptops, { status: 200 })
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
