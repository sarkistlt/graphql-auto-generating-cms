let config = {
        schema: printSchema(schema),
        exclude: ['paymentType'],
        rules: {
            couponType: {
                label: 'Coupons',
                resolvers: {
                    find: {
                        resolver: 'findCoupon',
                        allowed: false
                    }
                },
                fields: {
                    isMassPromo: {
                        label: 'is Mass Promo'
                    },
                    couponBatch_id: {
                        label: 'Coupon Batch ID',
                        inputControl: 'textarea',
                        disabled: true,
                        exclude: false
                    },
                    description: {
                        inputType: 'file'
                    }
                }
            }
        }
    };
    app.use('/graphql_cms_endpoint', middleware(config));
    
    <Route path='/cms' endpoint='/graphql_cms_endpoint' graphql='/graphql' components={Layout}/>