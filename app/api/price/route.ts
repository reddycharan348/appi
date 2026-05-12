import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { price } = await request.json();
    
    if (typeof price !== 'number') {
      return NextResponse.json({ error: 'Invalid price' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', 'data', 'prices.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const prices = JSON.parse(fileContent);
    
    const today = new Date().toISOString().split('T')[0];
    const newEntry = { date: today, price };
    
    // Check if entry for today already exists, if so update it, else add new
    const existingIndex = prices.findIndex((p: any) => p.date === today);
    if (existingIndex !== -1) {
      prices[existingIndex].price = price;
    } else {
      prices.push(newEntry);
    }

    fs.writeFileSync(filePath, JSON.stringify(prices, null, 2));

    return NextResponse.json({ success: true, prices });
  } catch (error) {
    console.error('Failed to update price:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
