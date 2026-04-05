import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const apiKey = process.env.KIT_API_KEY
    const formId = '9287136'

    // Using Kit/ConvertKit v3 API which works on all plans
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
          first_name: name || '',
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('Kit API error:', JSON.stringify(data))
      return NextResponse.json({ success: true, kitError: data })
    }

    console.log('Kit subscription success:', data?.subscription?.id)
    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
