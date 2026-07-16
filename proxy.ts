import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) { 
    const cookie = request.cookies.get('brand-access')

    if (cookie?.value !== process.env.BRAND_PASSWORD) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/home', '/guidelines', '/assets', '/support'],
}