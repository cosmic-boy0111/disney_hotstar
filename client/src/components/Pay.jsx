import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import Footer from './Footer';
import logo from '../Images/disney-hotstar-logo-dark.svg'
import { useParams } from 'react-router-dom'

const Pay = () => {

    const {name,prize,device,qua} = useParams()

    return (
        <div style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'space-between'
        }}>
            <img src={logo} alt="" />
            <div style={{
                width:'40%',
                color:'white',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
            <h4 style={{
                textTransform:'capitalize'
            }}> {name} Plan</h4>
            <span style={{
                marginBottom:'1rem',
                fontSize:'14px',
                opacity:'.7'
            }}>
                <div style={{textAlign:'center'}}>    You're paying ₹{prize} for this transaction.</div>
                  <div style={{textAlign:'center'}}>  Get access to all content - Live Sports, Movies, TV. </div>
                  <div style={{textAlign:'center'}}> Watch on any {device} devices at upto {qua} resolution</div>
            </span>
            
            <GooglePayButton 
                        environment="TEST"
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods:[
                                {
                                    type:'CARD',
                                    parameters:{
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                            gateway: 'example',
                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                    },
                                }
                            ],
                            merchantInfo: {
                                merchantId: '12345678901234567890',
                                merchantName: 'Demo Merchant',
                            },
                            transactionInfo: {
                                totalPriceStatus: 'FINAL',
                                totalPriceLabel: 'Total',
                                totalPrice: `${prize}`,
                                currencyCode: 'INR',
                                countryCode: 'IN',
                            },
                            // shippingAddressRequired: true,
                            callbackIntents: ['PAYMENT_AUTHORIZATION'],
                        }}
                        onLoadPaymentData={paymentRequest => {
                            console.log('Success', paymentRequest);
                        }}
                        onPaymentAuthorized={paymentData => {
                            console.log('payment authorization success',paymentData)
                            return {transactionState:'SUCCESS'}
                        }}
                        existingPaymentMethodRequired='false'
                        buttonColor='white'
                        buttonType='pay'
                    />
                    </div>
            <div style={{
                alignSelf:'baseline'
            }}>

            <Footer />
            </div>
        </div>
    )
}

export default Pay
