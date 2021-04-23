import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Youtube from '../components/YoutubeEmbed'
import Seo from '../components/SEO'
import KorgImg from '../images/korg.png'
import PayPalBtnImg from '../images/paypalbtn1.png'
import MpBtn from '../images/mp.png'

const Title = styled.h2`
    font-size: 2em;
    text-shadow:0 0 7px black, 0 0 7px black, 0 0 7px black, 0 0 7px black;
    margin-top:-4.45em;
    margin-bottom:3.7em;
    margin-left:auto;
    margin-right:auto;
    @media(max-width:360px){
        font-size:1.8em;
        margin-top:-4.85em;
        margin-bottom:2.7em;
        max-width:90vw;
    }
    @media(min-width:361px) and (max-width:385px){
        font-size:1.9em;
        margin-top:-4.86em;
        margin-bottom:2.7em;
        max-width:90vw;
    }
    @media(min-width:385px) and (max-width:480px){
        font-size:2em;
        max-width:85vw;
        margin-top:-5.05em;
        margin-bottom:2.7em;
    }
`

const Patches = () => {
  return (
    <Layout>
        <Seo title="microKORG Patches" />
        <style jsx>{`
            .titleContainer{
                display:block;
                text-align:center;
            }
            .titleContainer img{
                max-width:400px;
            }
            .pay{
                opacity:0.85;
                border:1px dashed rgba(255,255,255,0);
                padding: 0.5em;
                max-width:250px;
            }
            .pay:hover{
                    opacity:1;
                    border:1px dashed rgba(255,255,255,0.5);
                }
            }
            a{
                text-decoration:underline;
            }
            a:hover{
                font-weight:bold;
            }
            .center-text{
                text-align:center;
            }
            #payBtns{
                display:flex;
                justify-content:space-around;
                align-items:center;
                flex-direction:columns;
                margin:2em 0 1em 0;
                width:100%;
            }
            @media(max-width:400px){
                .titleContainer img{
                    max-width:95vw;
                }
            }
            @media(max-width:450px){
                #payBtns{
                    display:block;
                    margin:0 0 0 0;
                }
            }
        `}</style>
        <section>
        <div className="titleContainer"><a href="https://www.korg.com/us/products/synthesizers/microkorg/" target="_blank"><img src={KorgImg}/></a><Title>Casfoust's microKORG patches!</Title></div>
        <p>I've owned my microKORG for 4 years now and produced a lot of all&#x2011;original patches, of which i've chosen the best ones and have put them in this awesome patch bank.</p>
        <Youtube videoId="HDdGfK8BiQ0" maxWidth="640"/>
        <h3>Compatibility:</h3>
        <ul>
            <li>microKORG (classic)</li>
            <li>microKORG S</li>
            <li>KORG MS-2000 (and variants)</li>
        </ul>
        <p><b>NOT COMPATIBLE WITH microKORG XL and XL+</b></p>
        <h3>Available in:</h3>
        <ul>
            <li><b>.PRG</b> files (microKORG Sound Editor for Windows)</li>
            <li><b>.TXT</b> human-readable parameter recipes.</li>
        </ul>
        <p><strong>Get all the 67 patches for only $9!</strong></p>
        <div id="payBtns"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="FQHLWK9R5UPRJ"/>
<input className="pay" type="image" src={PayPalBtnImg} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
        <p className="center-text"><a href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=113411492-ac03f132-639a-4877-967e-af4f0cf5bea4"><img src={MpBtn} className="pay" alt="MercadoPago"/></a></p></div>
        <p>In case of any problem with your purchase, please contact me <a href="mailto:nvialgiudici@gmail.com">here</a>.</p>
        <p>En caso de tener algún problema con tu compra, por favor contactame <a href="mailto:nvialgiudici@gmail.com">acá</a>.</p>
        </section>
    </Layout>
  )
}

export default Patches
