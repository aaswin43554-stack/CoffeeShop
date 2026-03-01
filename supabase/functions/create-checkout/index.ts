import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@13.6.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
})

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { items, address, siteUrl } = await req.json()

        // Build line items from cart
        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: `${item.country} · ${item.varietal}`,
                    images: [], // add image URLs here if hosted publicly
                    metadata: {
                        product_id: item.id,
                        varietal: item.varietal,
                        country: item.country,
                    },
                },
                unit_amount: Math.round(item.price * 100), // Stripe uses cents
            },
            quantity: item.quantity,
        }))

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${siteUrl}/cart`,
            customer_email: address.email,
            shipping_address_collection: {
                allowed_countries: ['US', 'IN', 'GB', 'CA', 'AU', 'SG', 'TH', 'LA'],
            },
            metadata: {
                customer_name: address.fullName,
                customer_email: address.email,
                customer_phone: address.phone || '',
                street: address.street,
                city: address.city,
                postal_code: address.postalCode,
                country: address.country,
                product_ids: items.map((i: any) => i.id).join(','),
                quantities: items.map((i: any) => i.quantity).join(','),
            },
        })

        return new Response(
            JSON.stringify({ url: session.url, sessionId: session.id }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        console.error('Stripe error:', error)
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
