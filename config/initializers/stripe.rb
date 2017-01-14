require "stripe"
Stripe.api_version = '2016-07-06'
Stripe.api_key = ENV["stripe_api_key"]
STRIPE_PUBLIC_KEY = ENV["stripe_publishable_key"]