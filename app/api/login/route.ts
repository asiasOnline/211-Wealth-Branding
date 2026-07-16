import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const formData = await request.formData()
    const password = formData.get('password')

    if (
        typeof password === 'string' &&
        password === process.env.BRAND_PASSWORD
    ) {
        const response = NextResponse.redirect(new URL('/home', request.url))
        response.cookies.set('brand-access', process.env.BRAND_PASSWORD!, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
        })
        return response
    }

    return NextResponse.redirect(new URL('/?error=invalid', request.url))
}