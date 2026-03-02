import { NextResponse } from 'next/server';

// This function handles GET requests to /api/get_lowest_waves
export async function GET() {
  // The corrected target URL of the real backend API
  const targetUrl = 'https://jentu-production.up.railway.app/get_lowest_waves';

  // Get credentials from environment variables
  const username = process.env.JENTU_USERNAME;
  const password = process.env.JENTU_PASSWORD;

  // If credentials are not set, return an error
  if (!username || !password) {
    console.error('Missing JENTU_USERNAME or JENTU_PASSWORD environment variables');
    return new NextResponse('Authentication credentials are not configured', { status: 500 });
  }

  // Create the Basic Auth header
  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  try {
    // Make a server-to-server request to the real backend
    const res = await fetch(targetUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      // It's good practice to revalidate data periodically.
      // This tells Next.js to cache the result for 60 seconds.
      next: { revalidate: 60 },
    });

    // If the backend responds with an error, forward it
    if (!res.ok) {
      console.error(`Backend API responded with status: ${res.status}`);
      return new NextResponse(res.statusText, { status: res.status });
    }

    // Parse the JSON data from the backend
    const data = await res.json();

    // Send the data back to the frontend client
    return NextResponse.json(data);

  } catch (error) {
    // Handle network errors or other exceptions during the fetch
    console.error('Error proxying the request:', error);
    return new NextResponse('Error proxying the request to the backend', { status: 500 });
  }
}
